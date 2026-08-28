/**
 * Tailwind ease constants.
 *
 * Overrides existing Tailwind ease constants to use the Foundation Design Tokens.
 */
export const EASE = {
  'expressive-in': 'var(--ease-expressive-in)',
  'expressive-out': 'var(--ease-expressive-out)',
  linear: 'var(--ease-linear)',
  'standard-in': 'var(--ease-standard-in)',
  'standard-out': 'var(--ease-standard-out)',
} as const;
