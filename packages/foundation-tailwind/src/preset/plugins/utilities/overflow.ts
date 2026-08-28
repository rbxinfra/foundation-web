import type { TTailwindPluginAPI } from "./types";

/**
 * This plugin adds the following utilities to Tailwind:
 * - .clip (overflow: hidden)
 * - .no-clip (overflow: visible)
 * - .clip-x (overflow-x: hidden)
 * - .no-clip-x (overflow-x: visible)
 * - .clip-y (overflow-y: hidden)
 * - .no-clip-y (overflow-y: visible)
 * 
 * - .scroll (overflow: auto)
 * - .scroll-x (overflow-x: auto)
 * - .scroll-y (overflow-y: auto)
 * 
 * - .text-truncate-end (overflow: hidden, text-overflow: ellipsis)
 * - .text-truncate-split (overflow: hidden, text-overflow: ellipsis)
 * - .text-truncate-none (overflow: visible, text-overflow: clip)
 *
 * These utilities are not part of Tailwind by default, so we add them here.
 */
export const overflowUtilities = ({ addUtilities }: TTailwindPluginAPI) => {
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
};
