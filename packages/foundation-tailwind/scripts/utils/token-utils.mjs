/**
 * Full token path to CSS variable name conversion.
 * 
 * e.g:
 *  "Size.Size_100" -> "size-100"
 * "Config.UI.Interval" -> "config-uiinterval"
 */
function tokenPathToCssVarName(tokenPath) {
  return tokenPath
    .split(".")
    .map((part) => part.replace(/_/g, "-"))
    .map((part) => part.replace(/([a-z])([A-Z])/g, "$1-$2"))
    .map((part) => part.toLowerCase())
    .join("-");
}

/** Strip the "Group_" prefix from a "Group_NNN" key, leaving just "NNN". */
function stripGroupPrefix(groupName, key) {
  const re = new RegExp(`^${groupName}_`, "i");
  return key.replace(re, "");
}

/** Resolve all Figma references in form of {Path} or {Group.Path} to a CSS variable name. */
function aliasesToVarNames(value) {
  if (typeof value !== "string") return null;

  const matches = value.match(/\{([A-Za-z0-9_.]+)\}/g);
  if (!matches) return null;

  let resolved = value;
  for (const match of matches) {
    // Correctly handle {Group.Group_X} to -> --group-x, not --group-group-x
    const path = match.slice(1, -1).split(".");
    const last = path[path.length - 1];
    const group = path.length > 1 ? path[path.length - 2] : null;
    const cleanLast = group ? stripGroupPrefix(group, last) : last;
    const varName = `--${tokenPathToCssVarName(path.slice(0, -1).join("."))}-${tokenPathToCssVarName(cleanLast)}`;
    resolved = resolved.replace(match, `var(${varName})`);
  }

  return resolved;
}

/** Wraps the value in a CSS calc() if it contains any math operators. */
function wrapCalcIfNeeded(value) {
  if (typeof value !== "string") return value;

  // Skip any functions
  if (/^(?:[a-z\-]+\(|["'])/.test(value)) {
    const hasMathOutsideParens = /[+\-*/](?![^(]*\))/.test(value);
    if (hasMathOutsideParens) {
      const isFunctionName = /^[a-z\-]+-/.test(value);
      if (!isFunctionName) {
        return `calc(${value})`;
      }
    }

    return value;
  }

  if (value.startsWith("-")) {
    return value;
  }

  if (/[+\-*/]/.test(value)) {
    return `calc(${value})`;
  }

  return value;
}

/** Wraps the value in quotes if it contains any spaces. */
function wrapQuotesIfNeeded(value) {
  if (typeof value !== "string") return value;

  // Skip any functions (e.g. calc(), var(), color-mix(), etc.) or already-quoted values.
  if (/^(?:[a-z\-]+\(|["'])/.test(value)) return value;

  if (/\s/.test(value)) {
    return `"${value}"`;
  }

  return value;
}

/**
 * Recursively flattens a nested token object into { "--css-var-name": value }.
 * Collapses repeated group names (Size.Size_100 -> --size-100, not --size-size-100).
 */
function flatten(obj, pathParts = [], varPrefix = "--") {
  const out = {};
  for (const [key, value] of Object.entries(obj)) {
    const isNumberedLeaf = /_\d+$/.test(key);
    const cleanKey = isNumberedLeaf
      ? stripGroupPrefix(pathParts[pathParts.length - 1] || "", key)
      : key;

    const parts = [...pathParts, cleanKey];

    if (value && typeof value === "object" && !Array.isArray(value)) {
      Object.assign(out, flatten(value, parts, varPrefix));
    } else {
      const dedupedParts = parts.filter((p, i) => {
        if (i === 0) return true;
        return p.toLowerCase() !== parts[i - 1].toLowerCase();
      });
      const varName =
        varPrefix + dedupedParts.map((p) => tokenPathToCssVarName(p)).join("-");
      out[varName] = wrapCalcIfNeeded(aliasesToVarNames(value) || wrapQuotesIfNeeded(value));
    }
  }
  return out;
}

/** Diff two flattened token maps into { shared, aOnly, bOnly }. */
function diffFlat(flatA, flatB) {
  const shared = {};
  const aOnly = {};
  const bOnly = {};
  const keys = new Set([...Object.keys(flatA), ...Object.keys(flatB)]);
  for (const key of keys) {
    if (flatA[key] === flatB[key]) {
      shared[key] = flatA[key];
    } else {
      if (key in flatA) aOnly[key] = flatA[key];
      if (key in flatB) bOnly[key] = flatB[key];
    }
  }
  return { shared, aOnly, bOnly };
}

export { tokenPathToCssVarName, stripGroupPrefix, flatten, diffFlat, aliasesToVarNames };