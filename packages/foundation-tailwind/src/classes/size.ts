export type TTailwindSizePrefix = "size";

export type TTailwindSizes =
  | "0"
  | "50"
  | "100"
  | "150"
  | "200"
  | "250"
  | "300"
  | "350"
  | "400"
  | "450"
  | "500"
  | "550"
  | "600"
  | "700"
  | "800"
  | "850"
  | "900"
  | "1000"
  | "1100"
  | "1200"
  | "1300"
  | "1400"
  | "1500"
  | "1600"
  | "1700"
  | "1800"
  | "1900"
  | "2000"
  | "2100"
  | "2200"
  | "2300"
  | "2400"
  | "2500"
  | "2600"
  | "2700"
  | "2800"
  | "2900"
  | "3000";

export type TTailwindSizeValue =
  TTailwindSizes | "auto" | "full" | "min" | "max" | "fit";

export type TTailwindSizeClass = `${TTailwindSizePrefix}-${TTailwindSizeValue}`;
