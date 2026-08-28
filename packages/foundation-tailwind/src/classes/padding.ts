/**
 * Prefixes for Tailwind padding classes
 */
export type TTailwindPaddingPrefix = "padding";

/**
 * Prefixes for Tailwind padding-x classes
 */
export type TTailwindPaddingXPrefix = "padding-x";

/**
 * Prefixes for Tailwind padding-y classes
 */
export type TTailwindPaddingYPrefix = "padding-y";

/**
 * Prefixes for Tailwind padding-top classes
 */
export type TTailwindPaddingTopPrefix = "padding-top";

/**
 * Prefixes for Tailwind padding-bottom classes
 */
export type TTailwindPaddingBottomPrefix = "padding-bottom";

/**
 * Prefixes for Tailwind padding-left classes
 */
export type TTailwindPaddingLeftPrefix = "padding-left";

/**
 * Prefixes for Tailwind padding-right classes
 */
export type TTailwindPaddingRightPrefix = "padding-right";

/**
 * Tailwind padding values
 */
export type TTailwindPaddingValue =
  | "none"
  | "xxsmall"
  | "xsmall"
  | "small"
  | "medium"
  | "large"
  | "xlarge"
  | "xxlarge";

/**
 * Tailwind padding classes
 */
export type TTailwindPaddingClass =
  `${TTailwindPaddingPrefix}-${TTailwindPaddingValue}`;

/**
 * Tailwind padding-x classes
 */
export type TTailwindPaddingXClass =
  `${TTailwindPaddingXPrefix}-${TTailwindPaddingValue}`;

/**
 * Tailwind padding-y classes
 */
export type TTailwindPaddingYClass =
  `${TTailwindPaddingYPrefix}-${TTailwindPaddingValue}`;

/**
 * Tailwind padding-top classes
 */
export type TTailwindPaddingTopClass =
  `${TTailwindPaddingTopPrefix}-${TTailwindPaddingValue}`;

/**
 * Tailwind padding-bottom classes
 */
export type TTailwindPaddingBottomClass =
  `${TTailwindPaddingBottomPrefix}-${TTailwindPaddingValue}`;

/**
 * Tailwind padding-left classes
 */
export type TTailwindPaddingLeftClass =
  `${TTailwindPaddingLeftPrefix}-${TTailwindPaddingValue}`;

/**
 * Tailwind padding-right classes
 */
export type TTailwindPaddingRightClass =
  `${TTailwindPaddingRightPrefix}-${TTailwindPaddingValue}`;
