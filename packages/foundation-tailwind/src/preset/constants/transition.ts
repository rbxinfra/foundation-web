/**
 * Tailwind transition constants.
 *
 * Overrides existing Tailwind transition constants to use the Foundation Design Tokens.
 */
export const TRANSITION = {
  none: {
    transitionProperty: 'none',
  },
  all: {
    transitionProperty: 'all',
  },
  colors: {
    transitionProperty: 'background-color, border-color, color, fill, stroke',
    transitionTimingFunction: 'var(--ease-linear)',
    transitionDuration: 'var(--time-100)',
  },
  opacity: {
    transitionProperty: 'opacity',
    transitionTimingFunction: 'var(--ease-linear)',
    transitionDuration: 'var(--time-100)',
  },
  transform: {
    transitionProperty: 'transform',
    transitionTimingFunction: 'var(--ease-standard-out)',
    transitionDuration: 'var(--time-100)',
  },
} as const;
