import type { TTailwindPluginAPI } from "./types";

/**
 * Creates margin utilities for Tailwind CSS.
 *
 * This overrides the default m-* margin utilities to use full names like margin-*, margin-x-*, margin-y-*,
 * etc. to avoid conflicts with existing Tailwind classes.
 */
export const marginUtilities = ({
  matchUtilities,
  theme,
}: TTailwindPluginAPI) => {
  matchUtilities(
    { margin: (value) => ({ margin: value }) },
    { values: theme("margin") },
  );

  matchUtilities(
    { "margin-x": (value) => ({ marginLeft: value, marginRight: value }) },
    { values: theme("margin") },
  );

  matchUtilities(
    { "margin-y": (value) => ({ marginTop: value, marginBottom: value }) },
    { values: theme("margin") },
  );

  matchUtilities(
    { "margin-top": (value) => ({ marginTop: value }) },
    { values: theme("margin") },
  );

  matchUtilities(
    { "margin-bottom": (value) => ({ marginBottom: value }) },
    { values: theme("margin") },
  );

  matchUtilities(
    { "margin-left": (value) => ({ marginLeft: value }) },
    { values: theme("margin") },
  );

  matchUtilities(
    { "margin-right": (value) => ({ marginRight: value }) },
    { values: theme("margin") },
  );
};
