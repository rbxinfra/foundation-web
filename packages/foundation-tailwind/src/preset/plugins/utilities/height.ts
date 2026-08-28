import type { TTailwindPluginAPI } from './types';

/**
 * Creates height utilities for Tailwind CSS.
 *
 * This overrides the default h-* height utilities to use full names like height-*, height-x-*, height-y-*,
 * etc. to avoid conflicts with existing Tailwind classes.
 */
export const heightUtilities = ({
  matchUtilities,
  theme,
}: TTailwindPluginAPI) => {
  matchUtilities(
    { height: (value) => ({ height: value }) },
    { values: theme('height') },
  );

  matchUtilities(
    { 'min-height': (value) => ({ minHeight: value }) },
    { values: theme('minHeight') },
  );

  matchUtilities(
    { 'max-height': (value) => ({ maxHeight: value }) },
    { values: theme('maxHeight') },
  );
};
