export type TTailwindPaddingPrefix = "padding";
export type TTailwindPaddingXPrefix = "padding-x";
export type TTailwindPaddingYPrefix = "padding-y";
export type TTailwindPaddingTopPrefix = "padding-top";
export type TTailwindPaddingBottomPrefix = "padding-bottom";
export type TTailwindPaddingLeftPrefix = "padding-left";
export type TTailwindPaddingRightPrefix = "padding-right";

export type TTailwindPaddingValue =
  | "none"
  | "xxsmall"
  | "xsmall"
  | "small"
  | "medium"
  | "large"
  | "xlarge"
  | "xxlarge";

export type TTailwindPaddingClass =
  `${TTailwindPaddingPrefix}-${TTailwindPaddingValue}`;
export type TTailwindPaddingXClass =
  `${TTailwindPaddingXPrefix}-${TTailwindPaddingValue}`;
export type TTailwindPaddingYClass =
  `${TTailwindPaddingYPrefix}-${TTailwindPaddingValue}`;
export type TTailwindPaddingTopClass =
  `${TTailwindPaddingTopPrefix}-${TTailwindPaddingValue}`;
export type TTailwindPaddingBottomClass =
  `${TTailwindPaddingBottomPrefix}-${TTailwindPaddingValue}`;
export type TTailwindPaddingLeftClass =
  `${TTailwindPaddingLeftPrefix}-${TTailwindPaddingValue}`;
export type TTailwindPaddingRightClass =
  `${TTailwindPaddingRightPrefix}-${TTailwindPaddingValue}`;
