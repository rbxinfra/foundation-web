import type { TTailwindPluginAPI } from './types';

/**
 * This plugin adds the following utilities to Tailwind:
 * - ease-* (transition-timing-function)
 *
 * Overrides the default Tailwind ease utilities to use the Roblox Foundation transition timing functions.
 */
export const easeUtilities = ({
  matchUtilities,
  theme,
}: TTailwindPluginAPI) => {
  matchUtilities(
    { ease: (value) => ({ transitionTimingFunction: value }) },
    { values: theme('transitionTimingFunction') },
  );
};
