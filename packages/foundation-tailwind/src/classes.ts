import type { TTailwindAspectClass } from "./classes/aspect";
import type { TTailwindBgClass } from "./classes/bg";
import type { TTailwindContentClass } from "./classes/content";
import type {
  TTailwindGapClass,
  TTailwindGapXClass,
  TTailwindGapYClass,
} from "./classes/gap";
import type {
  TTailwindHeightClass,
  TTailwindMaxHeightClass,
  TTailwindMinHeightClass,
} from "./classes/height";
import type { TTailwindIconClass } from "./classes/icons.generated";
import type {
  TTailwindMarginBottomClass,
  TTailwindMarginClass,
  TTailwindMarginLeftClass,
  TTailwindMarginRightClass,
  TTailwindMarginTopClass,
  TTailwindMarginXClass,
  TTailwindMarginYClass,
} from "./classes/margin";
import type {
  TTailwindPaddingBottomClass,
  TTailwindPaddingClass,
  TTailwindPaddingLeftClass,
  TTailwindPaddingRightClass,
  TTailwindPaddingTopClass,
  TTailwindPaddingXClass,
  TTailwindPaddingYClass,
} from "./classes/padding";
import type { TTailwindRadiusClass } from "./classes/radius";
import type { TTailwindSizeClass } from "./classes/size";
import type { TTailwindStrokeClass } from "./classes/stroke";
import type { TTailwindTextClass } from "./classes/typography.generated";
import type { TTailwindWidthClass } from "./classes/width";

export type TTailwindClass =
  | TTailwindAspectClass
  | TTailwindBgClass
  | TTailwindContentClass
  | TTailwindGapClass
  | TTailwindGapXClass
  | TTailwindGapYClass
  | TTailwindHeightClass
  | TTailwindMinHeightClass
  | TTailwindMaxHeightClass
  | TTailwindIconClass
  | TTailwindMarginClass
  | TTailwindMarginXClass
  | TTailwindMarginYClass
  | TTailwindMarginTopClass
  | TTailwindMarginBottomClass
  | TTailwindMarginLeftClass
  | TTailwindMarginRightClass
  | TTailwindPaddingClass
  | TTailwindPaddingXClass
  | TTailwindPaddingYClass
  | TTailwindPaddingTopClass
  | TTailwindPaddingBottomClass
  | TTailwindPaddingLeftClass
  | TTailwindPaddingRightClass
  | TTailwindRadiusClass
  | TTailwindSizeClass
  | TTailwindStrokeClass
  | TTailwindTextClass
  | TTailwindWidthClass;

// Re-export everything:
export * from "./classes/aspect";
export * from "./classes/bg";
export * from "./classes/content";
export * from "./classes/gap";
export * from "./classes/height";
export * from "./classes/icons.generated";
export * from "./classes/padding";
export * from "./classes/radius";
export * from "./classes/size";
export * from "./classes/stroke";
export * from "./classes/typography.generated";
export * from "./classes/width";
