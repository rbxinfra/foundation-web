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
import type {
  TTailwindMaxWidthClass,
  TTailwindMinWidthClass,
  TTailwindWidthClass,
} from "./classes/width";

/**
 * A union of all Tailwind class types defined in this package
 */
export type TTailwindClass =
  | TTailwindAspectClass
  | TTailwindBgClass
  | TTailwindContentClass
  | TTailwindGapClass
  | TTailwindGapXClass
  | TTailwindGapYClass
  | TTailwindWidthClass
  | TTailwindMinWidthClass
  | TTailwindMaxWidthClass
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
  | TTailwindTextClass;

// Re-export everything:
export type * from "./classes/aspect";
export type * from "./classes/bg";
export type * from "./classes/content";
export type * from "./classes/gap";
export type * from "./classes/width";
export type * from "./classes/height";
export type * from "./classes/icons.generated";
export type * from "./classes/margin";
export type * from "./classes/padding";
export type * from "./classes/radius";
export type * from "./classes/size";
export type * from "./classes/stroke";
export type * from "./classes/typography.generated";
