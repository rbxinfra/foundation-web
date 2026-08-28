import type { TTailwindPluginAPI } from './types';

/**
 * Overrides the default Tailwind border-radius utilities to use our custom radius values.
 */
export const radiusUtilities = ({
  matchUtilities,
  theme,
}: TTailwindPluginAPI) => {
  matchUtilities(
    { radius: (value) => ({ borderRadius: value }) },
    { values: theme('borderRadius') },
  );
};
