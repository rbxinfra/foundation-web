import type { TTailwindPluginAPI } from './types';

import { TRANSITION } from '../../constants/transition';

const TRANSISITION_CLASS_PREFIX = '.transition';

/**
 * This plugin adds the following utilities to Tailwind:
 * - .transition-* (transition)
 *
 * Overrides the default Tailwind transition utilities to use our custom transition values.
 */
export const transitionUtilties = ({ addUtilities }: TTailwindPluginAPI) => {
  // Add .transition- prefix to each transition property
  const transitionProperties = Object.fromEntries(
    Object.entries(TRANSITION).map(([key, value]) => [
      `${TRANSISITION_CLASS_PREFIX}-${key}`,
      value,
    ]),
  );

  addUtilities(transitionProperties);
};
