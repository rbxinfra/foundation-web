import type { TTailwindPluginAPI } from './types';

/**
 * Creates content utilities for Tailwind CSS.
 *
 * This overrides the default text-* color utilities to use the `content` property instead of `color`.
 */
export const contentUtilities = ({
  matchUtilities,
  theme,
}: TTailwindPluginAPI) => {
  matchUtilities(
    { content: (value) => ({ color: value }) },
    { values: theme('colors') },
  );
};
