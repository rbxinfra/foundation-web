import { OUTLINE } from "../../constants/outline";
import type { TTailwindPluginAPI } from "./types";

const OUTLINE_CLASS_PREFIX = ".outline";

/**
 * This plugin adds the following utilities to Tailwind:
 * - .outline-* (outline)
 * 
 * Overrides the default Tailwind outline utilities to use our custom outline values.
 */
export const outlineUtilities = ({ addUtilities }: TTailwindPluginAPI) => {
  // Add .outline- prefix to each transition property
  const outlineProperties = Object.fromEntries(
    Object.entries(OUTLINE).map(([key, value]) => [
      `${OUTLINE_CLASS_PREFIX}-${key}`,
      value,
    ]),
  );

  addUtilities(outlineProperties);
};
