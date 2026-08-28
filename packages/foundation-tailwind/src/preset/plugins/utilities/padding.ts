import type { TTailwindPluginAPI } from './types';

/**
 * Creates padding utilities for Tailwind CSS.
 *
 * This overrides the default p-* padding utilities to use full names like padding-*, padding-x-*, padding-y-*,
 * etc. to avoid conflicts with existing Tailwind classes.
 */
export const paddingUtilities = ({
  matchUtilities,
  theme,
}: TTailwindPluginAPI) => {
  matchUtilities(
    { padding: (value) => ({ padding: value }) },
    { values: theme('padding') },
  );

  matchUtilities(
    { 'padding-x': (value) => ({ paddingLeft: value, paddingRight: value }) },
    { values: theme('padding') },
  );

  matchUtilities(
    { 'padding-y': (value) => ({ paddingTop: value, paddingBottom: value }) },
    { values: theme('padding') },
  );

  matchUtilities(
    { 'padding-top': (value) => ({ paddingTop: value }) },
    { values: theme('padding') },
  );

  matchUtilities(
    { 'padding-bottom': (value) => ({ paddingBottom: value }) },
    { values: theme('padding') },
  );

  matchUtilities(
    { 'padding-left': (value) => ({ paddingLeft: value }) },
    { values: theme('padding') },
  );

  matchUtilities(
    { 'padding-right': (value) => ({ paddingRight: value }) },
    { values: theme('padding') },
  );
};
