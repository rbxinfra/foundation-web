export type TTailwindMarginPrefix = "margin";
export type TTailwindMarginTopPrefix = "margin-top";
export type TTailwindMarginRightPrefix = "margin-right";
export type TTailwindMarginBottomPrefix = "margin-bottom";
export type TTailwindMarginLeftPrefix = "margin-left";
export type TTailwindMarginXPrefix = "margin-x";
export type TTailwindMarginYPrefix = "margin-y";

export type TTailwindMarginValue =
  | "none"
  | "small"
  | "medium"
  | "large";

export type TTailwindMarginClass =
  `${TTailwindMarginPrefix}-${TTailwindMarginValue}`;
export type TTailwindMarginXClass =
  `${TTailwindMarginXPrefix}-${TTailwindMarginValue}`;
export type TTailwindMarginYClass =
  `${TTailwindMarginYPrefix}-${TTailwindMarginValue}`;
export type TTailwindMarginTopClass =
  `${TTailwindMarginTopPrefix}-${TTailwindMarginValue}`;
export type TTailwindMarginBottomClass =
  `${TTailwindMarginBottomPrefix}-${TTailwindMarginValue}`;
export type TTailwindMarginLeftClass =
  `${TTailwindMarginLeftPrefix}-${TTailwindMarginValue}`;
export type TTailwindMarginRightClass =
  `${TTailwindMarginRightPrefix}-${TTailwindMarginValue}`;
