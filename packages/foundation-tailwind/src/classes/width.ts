import type { TTailwindSizes } from './size';

/**
 * Prefixes for Tailwind width classes
 */
export type TTailwindWidthPrefix = 'width';

/**
 * Prefixes for Tailwind min-width classes
 */
export type TTailwindMinWidthPrefix = 'min-width';

/**
 * Prefixes for Tailwind max-width classes
 */
export type TTailwindMaxWidthPrefix = 'max-width';

/**
 * Values for Tailwind width classes
 */
export type TTailwindWidthValue =
  TTailwindSizes | 'auto' | 'full' | 'min' | 'max' | 'fit';

/**
 * Values for Tailwind min-width classes
 */
export type TTailwindMinWidthValue =
  TTailwindSizes | 'full' | 'min' | 'max' | 'fit';

/**
 * Values for Tailwind max-width classes
 */
export type TTailwindMaxWidthValue =
  TTailwindSizes | 'none' | 'full' | 'min' | 'max' | 'fit';

/**
 * Tailwind width class types
 */
export type TTailwindWidthClass =
  `${TTailwindWidthPrefix}-${TTailwindWidthValue}`;

/**
 * Tailwind min-width class types
 */
export type TTailwindMinWidthClass =
  `${TTailwindMinWidthPrefix}-${TTailwindMinWidthValue}`;

/**
 * Tailwind max-width class types
 */
export type TTailwindMaxWidthClass =
  `${TTailwindMaxWidthPrefix}-${TTailwindMaxWidthValue}`;
