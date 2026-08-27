import { Config as TTailwindConfig } from "tailwindcss";

type TTailwindCorePluginsConfig = TTailwindConfig["corePlugins"];

/**
 * Tailwind core plugins configuration.
 * This configuration is used to disable certain core plugins that are
 * not needed in the Foundation Tailwind preset.
 *
 * The disabled plugins are replaced by custom utilities that are defined in the preset.
 */
export default {
  // Base
  preflight: false,

  // Typography — replaced by custom utilities (content, text-align-x-*,
  // text-align-y-*, .text-wrap/.text-no-wrap, .text-truncate-*)
  content: false,
  textColor: false, // content replaces textColor
  textAlign: false,
  verticalAlign: false,
  textOverflow: false,
  textWrap: false,
  fontFamily: false,
  fontVariantNumeric: false,

  // Flexbox — replaced by custom utilities (.wrap/.no-wrap, grow-*)
  flexWrap: false,
  flexGrow: false,

  // Grid — unused, disabled
  gridColumn: false,
  gridRow: false,
  gridTemplateColumns: false,
  gridTemplateRows: false,

  // Borders & outline — replaced by custom utilities (stroke-*, radius-*, outline-*)
  borderRadius: false,
  borderWidth: false,
  borderColor: false,
  borderSpacing: false,
  stroke: false,
  strokeWidth: false,
  outlineWidth: false,
  outlineColor: false,
  outlineStyle: false,
  outlineOffset: false,

  // Ring — unused, disabled
  ringWidth: false,
  ringColor: false,
  ringOpacity: false,
  ringOffsetWidth: false,
  ringOffsetColor: false,

  // Shadows & effects — unused, disabled
  boxShadow: false,
  dropShadow: false,

  // Filters — unused, disabled
  filter: false,
  blur: false,
  brightness: false,
  contrast: false,
  grayscale: false,
  hueRotate: false,
  invert: false,
  saturate: false,
  sepia: false,

  // Backdrop filters — unused, disabled
  backdropFilter: false,
  backdropBlur: false,
  backdropBrightness: false,
  backdropContrast: false,
  backdropGrayscale: false,
  backdropHueRotate: false,
  backdropInvert: false,
  backdropOpacity: false,
  backdropSaturate: false,
  backdropSepia: false,

  // Transform — unused, disabled
  transform: false,
  transformOrigin: false,
  rotate: false,
  translate: false,
  scale: false,

  // Transition & animation — transitionProperty/transitionTimingFunction
  // replaced by custom utilities (transition-*, ease-*); animation unused
  transitionProperty: false,
  transitionTimingFunction: false,
  animation: false,

  // Background — unused, disabled
  backgroundImage: false,
  gradientColorStops: false,

  // Object fit/position — unused, disabled
  objectFit: false,
  objectPosition: false,

  // Lists & tables — unused, disabled
  listStyleType: false,
  listStyleImage: false,
  listStylePosition: false,
  tableLayout: false,

  // Layout / overflow / sizing — overflow replaced by custom utilities
  // (.clip/.scroll variants); rest unused, disabled
  overflow: false,
  overscrollBehavior: false,
  boxSizing: false,
  lineClamp: false,
  contain: false,

  // Interactivity — unused, disabled
  resize: false,
  touchAction: false,
  appearance: false,

  // Scroll — unused, disabled
  scrollSnapType: false,

  // Misc — unused, disabled
  zIndex: false,

  // Disable p-*, m-*, w-*, min-w-*, max-w-*, h-*, min-h-*, max-h-* classes,
  // they have been renamed to padding-*, margin-*, width-*, min-width-*, max-width-*, height-*, min-height-*, max-height-* classes
  padding: true,
  margin: true,
  width: true,
  minWidth: true,
  maxWidth: true,
  height: true,
  minHeight: true,
  maxHeight: true,
} as TTailwindCorePluginsConfig;
