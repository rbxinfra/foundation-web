function flattenTokens(tokens, sort = true) {
  function isTokenNode(node) {
    return (
      !!node && typeof node === 'object' && '$value' in node && '$type' in node
    );
  }

  function colorObjToRgba(v) {
    if (v && typeof v === 'object' && Array.isArray(v.components)) {
      const [r, g, b] = v.components.map((c) => Math.round(c * 255));
      const a = typeof v.alpha === 'number' ? v.alpha : 1;
      if (a === 1) {
        return `rgb(${r}, ${g}, ${b})`;
      }

      // Fix for floating point precision issues (e.g. 0.30000000000000004)
      const alpha = Math.round(a * 100) / 100;

      return `rgba(${r}, ${g}, ${b}, ${alpha})`;
    }
    return null;
  }

  function aliasRef(node) {
    const targetName =
      node.$extensions &&
      node.$extensions['com.figma.aliasData'] &&
      node.$extensions['com.figma.aliasData'].targetVariableName;
    if (typeof targetName === 'string' && targetName.length > 0) {
      return `{${targetName.split('/').join('.')}}`;
    }
    return null;
  }

  function leafValue(node) {
    const { $type, $value } = node;
    const figmaType = node.$extensions && node.$extensions['com.figma.type'];

    const alias = aliasRef(node);
    if (alias) return alias;

    if ($type === 'color' && $value && typeof $value === 'object') {
      return colorObjToRgba($value) ?? $value;
    }

    if ($type === 'duration' && $value && typeof $value === 'object') {
      // Convert to seconds based on Figma's duration unit (milliseconds)
      const seconds = $value.unit === 'ms' ? $value.value / 1000 : $value.value;
      return `${seconds}s`;
    }

    if (figmaType === 'boolean' && typeof $value === 'number') {
      return $value === 1;
    }

    // Handle number precision issues (e.g. 0.30000000000000004, or 0.01 == 0.009999999776482582)
    if ($type === 'number' && typeof $value === 'number') {
      const rounded = Math.round($value * 100) / 100;
      return rounded;
    }

    // Numbers, strings (including refs and expressions), easing, etc.
    return $value;
  }

  function walk(node) {
    if (isTokenNode(node)) {
      return leafValue(node);
    }
    if (node && typeof node === 'object') {
      const out = {};
      for (const key of Object.keys(node)) {
        if (key.startsWith('$')) continue; // skip $extensions, $description, etc.
        const value = walk(node[key]);
        if (value !== undefined) out[key] = value;
      }
      return out;
    }
    return undefined;
  }

  function sortKeysDeep(value) {
    if (Array.isArray(value)) {
      return value.map(sortKeysDeep);
    }
    if (value && typeof value === 'object') {
      const sorted = {};
      for (const key of Object.keys(value).sort((a, b) => a.localeCompare(b))) {
        sorted[key] = sortKeysDeep(value[key]);
      }
      return sorted;
    }
    return value;
  }

  const result = {};
  for (const key of Object.keys(tokens)) {
    if (key.startsWith('$')) continue;
    result[key] = walk(tokens[key]);
  }
  if (sort) return sortKeysDeep(result);

  return result;
}

export { flattenTokens };
