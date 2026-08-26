import plugin from "tailwindcss/plugin";

/** All base utilities */
export const utilitiesPlugin = plugin(
  ({ matchUtilities, theme, addUtilities }) => {
    // Content color override
    matchUtilities(
      { content: (value) => ({ color: value }) },
      { values: theme("colors") },
    );

    // m-*, p-*, w-*, h-*, and so on replaced
    // with full names like margin-*, padding-*, width-*, height-* to avoid conflicts with existing Tailwind classes
    matchUtilities(
      { margin: (value) => ({ margin: value }) },
      { values: theme("margin") },
    );

    matchUtilities(
      { padding: (value) => ({ padding: value }) },
      { values: theme("padding") },
    );

    matchUtilities(
      { "padding-x": (value) => ({ paddingLeft: value, paddingRight: value }) },
      { values: theme("padding") },
    );

    matchUtilities(
      { "padding-y": (value) => ({ paddingTop: value, paddingBottom: value }) },
      { values: theme("padding") },
    );

    matchUtilities(
      { 'padding-top': (value) => ({ paddingTop: value }) },
      { values: theme("padding") },
    );

    matchUtilities(
      { 'padding-bottom': (value) => ({ paddingBottom: value }) },
      { values: theme("padding") },
    );

    matchUtilities(
      { 'padding-left': (value) => ({ paddingLeft: value }) },
      { values: theme("padding") },
    );

    matchUtilities(
      { 'padding-right': (value) => ({ paddingRight: value }) },
      { values: theme("padding") },
    );

    matchUtilities(
      { width: (value) => ({ width: value }) },
      { values: theme("width") },
    );

    matchUtilities(
      { height: (value) => ({ height: value }) },
      { values: theme("height") },
    );

    matchUtilities(
      { "min-width": (value) => ({ minWidth: value }) },
      { values: theme("minWidth") },
    );

    matchUtilities(
      { "max-width": (value) => ({ maxWidth: value }) },
      { values: theme("maxWidth") },
    );

    matchUtilities(
      { "min-height": (value) => ({ minHeight: value }) },
      { values: theme("minHeight") },
    );

    matchUtilities(
      { "max-height": (value) => ({ maxHeight: value }) },
      { values: theme("maxHeight") },
    );

    // text-align-x-* (text-align) and text-align-y-* (vertical-align) are not part of Tailwind, so we add them here
    matchUtilities(
      { "text-align-x": (value) => ({ textAlign: value }) },
      { values: theme("textAlign") },
    );

    matchUtilities(
      { "text-align-y": (value) => ({ verticalAlign: value }) },
      { values: theme("verticalAlign") },
    );

    // wrap and no-wrap
    addUtilities({
      ".wrap": { flexWrap: "wrap" },
      ".no-wrap": { flexWrap: "nowrap" },
    });

    // clip, clip-x, clip-y, scroll, scroll-x, scroll-y
    addUtilities({
      ".clip": { overflow: "hidden" },
      ".no-clip": { overflow: "visible" },
      ".clip-x": { overflowX: "hidden" },
      ".no-clip-x": { overflowX: "visible" },
      ".clip-y": { overflowY: "hidden" },
      ".no-clip-y": { overflowY: "visible" },

      ".scroll": { overflow: "auto" },
      ".scroll-x": { overflowX: "auto" },
      ".scroll-y": { overflowY: "auto" },
    });

    // text-truncate-end/split/none
    addUtilities({
      ".text-truncate-end": {
        overflow: "hidden",
        textOverflow: "ellipsis",
      },
      ".text-truncate-split": {
        overflow: "hidden",
        textOverflow: "ellipsis",
      },
      ".text-truncate-none": {
        overflow: "visible",
        textOverflow: "clip",
      },
    });

    // stroke (base and per border color)
    matchUtilities(
      // base
      {
        stroke: (value) => ({
          borderStyle: "solid",
          borderWidth: value,
          boxSizing: "border-box",
        }),
      },
      { values: theme("borderWidth") },
    );

    matchUtilities(
      // per border color
      { stroke: (value) => ({ borderColor: value }) },
      { values: theme("borderColor") },
    );

    // Border radius
    matchUtilities(
      { radius: (value) => ({ borderRadius: value }) },
      { values: theme("borderRadius") },
    );
  },
);
