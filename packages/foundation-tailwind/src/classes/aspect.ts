/**
 * The prefix for the Tailwind aspect ratio classes.
 */
export type TTailwindAspectPrefix = 'aspect';

/**
 * The possible values for the Tailwind aspect ratio classes.
 */
export type TTailwindAspectValue =
  '1-1' | '16-9' | '2-1' | '4-3' | '4-5' | '5-4';

/**
 * The complete Tailwind aspect ratio class type, which combines the prefix and value.
 */
export type TTailwindAspectClass =
  `${TTailwindAspectPrefix}-${TTailwindAspectValue}`;
