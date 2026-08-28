import type { TTailwindPluginAPI } from './types';

/**
 * This plugin adds the following utilities to Tailwind:
 * - text-align-x-* (text-align)
 * - text-align-y-* (vertical-align)
 *
 * These utilities are not part of Tailwind by default, so we add them here.
 */
export const textAlignUtilities = ({
  matchUtilities,
  theme,
}: TTailwindPluginAPI) => {
  matchUtilities(
    { 'text-align-x': (value) => ({ textAlign: value }) },
    { values: theme('textAlign') },
  );

  matchUtilities(
    { 'text-align-y': (value) => ({ verticalAlign: value }) },
    { values: theme('verticalAlign') },
  );
};
