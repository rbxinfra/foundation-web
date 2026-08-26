import type { TTailwindSizes } from "./size";

export type TTailwindWidthPrefix = "width";
export type TTailwindMinWidthPrefix = "min-width";
export type TTailwindMaxWidthPrefix = "max-width";

export type TTailwindWidthValue =
  TTailwindSizes | "auto" | "full" | "min" | "max" | "fit";
export type TTailwindMinWidthValue =
  TTailwindSizes | "full" | "min" | "max" | "fit";
export type TTailwindMaxWidthValue =
  TTailwindSizes | "none" | "full" | "min" | "max" | "fit";

export type TTailwindWidthClass =
  `${TTailwindWidthPrefix}-${TTailwindWidthValue}`;
export type TTailwindMinWidthClass =
  `${TTailwindMinWidthPrefix}-${TTailwindMinWidthValue}`;
export type TTailwindMaxWidthClass =
  `${TTailwindMaxWidthPrefix}-${TTailwindMaxWidthValue}`;
