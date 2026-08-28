/**
 * Prefix for the Tailwind radius classes
 */
export type TTailwindRadiusPrefix = "radius";

/**
 * Tailwind radius values
 */
export type TTailwindRadiusValue =
  "none" | "xsmall" | "small" | "medium" | "large" | "circle";

/**
 * Tailwind radius classes
 */
export type TTailwindRadiusClass =
  `${TTailwindRadiusPrefix}-${TTailwindRadiusValue}`;
