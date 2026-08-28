import type { TTailwindPluginAPI } from "./types";

/**
 * This plugin adds the following utilities to Tailwind:
 * - .text-wrap (white-space: normal)
 * - .text-no-wrap (white-space: nowrap)
 */
export const textWrapUtilities = ({ addUtilities }: TTailwindPluginAPI) => {
  // text-wrap and text-no-wrap
  addUtilities({
    ".text-wrap": { whiteSpace: "normal" },
    ".text-no-wrap": { whiteSpace: "nowrap" },
  });
};
