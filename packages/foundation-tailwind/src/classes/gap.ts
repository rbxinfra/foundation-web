/**
 * Prefixes for Tailwind gap classes
 */
export type TTailwindGapPrefix = 'gap';

/**
 * Prefixes for Tailwind gap-x classes
 */
export type TTailwindGapXPrefix = 'gap-x';

/**
 * Prefixes for Tailwind gap-y classes
 */
export type TTailwindGapYPrefix = 'gap-y';

/**
 * Tailwind gap values
 */
export type TTailwindGapValue =
  | 'none'
  | 'xxsmall'
  | 'xsmall'
  | 'small'
  | 'medium'
  | 'large'
  | 'xlarge'
  | 'xxlarge';

/**
 * Tailwind gap classes
 */
export type TTailwindGapClass = `${TTailwindGapPrefix}-${TTailwindGapValue}`;

/**
 * Tailwind gap-x classes
 */
export type TTailwindGapXClass = `${TTailwindGapXPrefix}-${TTailwindGapValue}`;

/**
 * Tailwind gap-y classes
 */
export type TTailwindGapYClass = `${TTailwindGapYPrefix}-${TTailwindGapValue}`;
