/**
 * Prefixes for Tailwind margin classes
 */
export type TTailwindMarginPrefix = 'margin';

/**
 * Prefixes for Tailwind margin-top classes
 */
export type TTailwindMarginTopPrefix = 'margin-top';

/**
 * Prefixes for Tailwind margin-right classes
 */
export type TTailwindMarginRightPrefix = 'margin-right';

/**
 * Prefixes for Tailwind margin-bottom classes
 */
export type TTailwindMarginBottomPrefix = 'margin-bottom';

/**
 * Prefixes for Tailwind margin-left classes
 */
export type TTailwindMarginLeftPrefix = 'margin-left';

/**
 * Prefixes for Tailwind margin-x classes
 */
export type TTailwindMarginXPrefix = 'margin-x';

/**
 * Prefixes for Tailwind margin-y classes
 */
export type TTailwindMarginYPrefix = 'margin-y';

/**
 * Tailwind margin values
 */
export type TTailwindMarginValue = 'none' | 'small' | 'medium' | 'large';

/**
 * Tailwind margin classes
 */
export type TTailwindMarginClass =
  `${TTailwindMarginPrefix}-${TTailwindMarginValue}`;

/**
 * Tailwind margin-x classes
 */
export type TTailwindMarginXClass =
  `${TTailwindMarginXPrefix}-${TTailwindMarginValue}`;

/**
 * Tailwind margin-y classes
 */
export type TTailwindMarginYClass =
  `${TTailwindMarginYPrefix}-${TTailwindMarginValue}`;

/**
 * Tailwind margin-top classes
 */
export type TTailwindMarginTopClass =
  `${TTailwindMarginTopPrefix}-${TTailwindMarginValue}`;

/**
 * Tailwind margin-bottom classes
 */
export type TTailwindMarginBottomClass =
  `${TTailwindMarginBottomPrefix}-${TTailwindMarginValue}`;

/**
 * Tailwind margin-left classes
 */
export type TTailwindMarginLeftClass =
  `${TTailwindMarginLeftPrefix}-${TTailwindMarginValue}`;

/**
 * Tailwind margin-right classes
 */
export type TTailwindMarginRightClass =
  `${TTailwindMarginRightPrefix}-${TTailwindMarginValue}`;
