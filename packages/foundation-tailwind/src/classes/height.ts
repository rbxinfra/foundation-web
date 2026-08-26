import type { TTailwindSizes } from "./size";

export type TTailwindHeightPrefix = "height";
export type TTailwindMinHeightPrefix = "min-height";
export type TTailwindMaxHeightPrefix = "max-height";

export type TTailwindHeightValue =
  TTailwindSizes | "auto" | "full" | "min" | "max" | "fit";
export type TTailwindMinHeightValue =
  TTailwindSizes | "full" | "min" | "max" | "fit";
export type TTailwindMaxHeightValue =
  TTailwindSizes | "none" | "full" | "min" | "max" | "fit";

export type TTailwindHeightClass =
  `${TTailwindHeightPrefix}-${TTailwindHeightValue}`;
export type TTailwindMinHeightClass =
  `${TTailwindMinHeightPrefix}-${TTailwindMinHeightValue}`;
export type TTailwindMaxHeightClass =
  `${TTailwindMaxHeightPrefix}-${TTailwindMaxHeightValue}`;
