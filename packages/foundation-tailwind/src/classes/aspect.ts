export type TTailwindAspectPrefix = "aspect";

export type TTailwindAspectValue =
  "1-1" | "16-9" | "2-1" | "4-3" | "4-5" | "5-4";

export type TTailwindAspectClass =
  `${TTailwindAspectPrefix}-${TTailwindAspectValue}`;
