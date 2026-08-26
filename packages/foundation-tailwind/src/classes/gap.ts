export type TTailwindGapPrefix = "gap";
export type TTailwindGapXPrefix = "gap-x";
export type TTailwindGapYPrefix = "gap-y";

export type TTailwindGapValue =
  | "none"
  | "xxsmall"
  | "xsmall"
  | "small"
  | "medium"
  | "large"
  | "xlarge"
  | "xxlarge";

export type TTailwindGapClass = `${TTailwindGapPrefix}-${TTailwindGapValue}`;
export type TTailwindGapXClass = `${TTailwindGapXPrefix}-${TTailwindGapValue}`;
export type TTailwindGapYClass = `${TTailwindGapYPrefix}-${TTailwindGapValue}`;
