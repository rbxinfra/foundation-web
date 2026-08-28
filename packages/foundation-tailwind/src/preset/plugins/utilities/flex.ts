import type { TTailwindPluginAPI } from './types';

/**
 * This plugin adds the following utilities to Tailwind:
 * - .wrap (flex-wrap: wrap)
 * - .no-wrap (flex-wrap: nowrap)
 *
 * - .grow (flex: 1 0 auto)
 * - .shrink (flex: 0 1 auto)
 * - .fill (flex: 1 1 auto)
 *
 * - .grow-* (flex-grow)
 */
export const flexUtilties = ({
  addUtilities,
  matchUtilities,
  theme,
}: TTailwindPluginAPI) => {
  // wrap and no-wrap
  addUtilities({
    '.wrap': { flexWrap: 'wrap' },
    '.no-wrap': { flexWrap: 'nowrap' },
  });

  // Grow overrides
  addUtilities({
    '.grow': {
      flex: '1 0 auto',
    },
    '.shrink': {
      flex: '0 1 auto',
    },
    '.fill': {
      flex: '1 1 auto',
    },
  });

  // Flex grow
  matchUtilities(
    { grow: (value) => ({ flexGrow: value }) },
    { values: theme('flexGrow') },
  );
};
