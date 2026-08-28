import type { TTailwindPluginAPI } from "./types";

/**
 * Creates width utilities for Tailwind CSS.
 *
 * This overrides the default w-* width utilities to use full names like width-*, width-x-*, width-y-*,
 * etc. to avoid conflicts with existing Tailwind classes.
 */
export const widthUtilities = ({
  matchUtilities,
  theme,
}: TTailwindPluginAPI) => {
  matchUtilities(
    { width: (value) => ({ width: value }) },
    { values: theme("width") },
  );

  matchUtilities(
    { "min-width": (value) => ({ minWidth: value }) },
    { values: theme("minWidth") },
  );

  matchUtilities(
    { "max-width": (value) => ({ maxWidth: value }) },
    { values: theme("maxWidth") },
  );
};
