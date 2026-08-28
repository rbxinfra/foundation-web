import type { TTailwindPluginAPI } from "./types";

import { STROKE } from "../../constants/stroke";

const STROKE_CLASS_PREFIX = ".stroke";

/**
 * This plugin adds the following utilities to Tailwind:
 * - .stroke-${key} (border-width)
 * - .stroke-* (border-color)
 * 
 * Stroke takes the stroke constants from STROKE, and every other stroke utility is generated from the borderColor theme.
 * 
 * Example:
 * - .stroke-thin: { border-width: var(--stroke-thin); }
 * - .stroke-emphasis: { border-color: var(--color-stroke-emphasis); }
 * - .stroke-[rgb(255,0,0)]: { border-color: rgb(255,0,0); }
 */
export const strokeUtilities = ({
  addUtilities,
  matchUtilities,
  theme,
}: TTailwindPluginAPI) => {
  const strokeProperties = Object.fromEntries(
    Object.entries(STROKE)
      .map(([key, value]) => [`${STROKE_CLASS_PREFIX}-${key}`, value])
      .map(([key, value]) => [
        key,
        { borderStyle: "solid", borderWidth: value, boxSizing: "border-box" },
      ]),
  );

  addUtilities(strokeProperties);

  matchUtilities(
    // per border color
    { stroke: (value) => ({ borderColor: value }) },
    { values: theme("borderColor") },
  );
};
