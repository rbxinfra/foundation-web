import type { TTailwindSizes } from "./size";

/**
 * Prefixes for Tailwind height classes.
 */
export type TTailwindHeightPrefix = "height";

/**
 * Prefixes for Tailwind min-height classes.
 */
export type TTailwindMinHeightPrefix = "min-height";

/**
 * Prefixes for Tailwind max-height classes.
 */
export type TTailwindMaxHeightPrefix = "max-height";

/**
 * Values for Tailwind height classes.
 */
export type TTailwindHeightValue =
  TTailwindSizes | "auto" | "full" | "min" | "max" | "fit";

/**
 * Values for Tailwind min-height classes.
 */
export type TTailwindMinHeightValue =
  TTailwindSizes | "full" | "min" | "max" | "fit";

/**
 * Values for Tailwind max-height classes.
 */
export type TTailwindMaxHeightValue =
  TTailwindSizes | "none" | "full" | "min" | "max" | "fit";

/**
 * Tailwind height class types.
 */
export type TTailwindHeightClass =
  `${TTailwindHeightPrefix}-${TTailwindHeightValue}`;

/**
 * Tailwind min-height class types.
 */
export type TTailwindMinHeightClass =
  `${TTailwindMinHeightPrefix}-${TTailwindMinHeightValue}`;

/**
 * Tailwind max-height class types.
 */
export type TTailwindMaxHeightClass =
  `${TTailwindMaxHeightPrefix}-${TTailwindMaxHeightValue}`;
