export const BASE_COLORS = {
  none: "var(--color-none)",
  "common-backdrop": "var(--color-common-backdrop)",
  "common-heavy-divider": "var(--color-common-heavy-divider)",
  "common-navigation-bar": "var(--color-common-navigation-bar)",
  "common-scrim": "var(--color-common-scrim)",
  "common-shadow": "var(--color-common-shadow)",
  "common-shimmer": "var(--color-common-shimmer)",
  "content-default": "var(--color-content-default)",
  "content-emphasis": "var(--color-content-emphasis)",
  "content-link": "var(--color-content-link)",
  "content-muted": "var(--color-content-muted)",
  "over-media-0": "var(--color-over-media-0)",
  "over-media-100": "var(--color-over-media-100)",
  "over-media-200": "var(--color-over-media-200)",
  "over-media-300": "var(--color-over-media-300)",
  "selection-start": "var(--color-selection-start)",
  "selection-end": "var(--color-selection-end)",
  "shift-100": "var(--color-shift-100)",
  "shift-200": "var(--color-shift-200)",
  "shift-300": "var(--color-shift-300)",
  "shift-400": "var(--color-shift-400)",
  "state-hover": "var(--color-state-hover)",
  "state-idle": "var(--color-state-idle)",
  "state-press": "var(--color-state-press)",
  "stroke-default": "var(--color-stroke-default)",
  "stroke-emphasis": "var(--color-stroke-emphasis)",
  "stroke-muted": "var(--color-stroke-muted)",
  "surface-0": "var(--color-surface-0)",
  "surface-100": "var(--color-surface-100)",
  "surface-200": "var(--color-surface-200)",
  "surface-300": "var(--color-surface-300)",
  "system-alert": "var(--color-system-alert)",
  "system-contrast": "var(--color-system-contrast)",
  "system-emphasis": "var(--color-system-emphasis)",
  "system-neutral": "var(--color-system-neutral)",
  "system-success": "var(--color-system-success)",
  "system-warning": "var(--color-system-warning)",
};

export const BG_COLORS = {
  ...BASE_COLORS,

  "action-alert": "var(--color-action-alert-background)",
  "action-emphasis": "var(--color-action-emphasis-background)",
  "action-link": "var(--color-action-link-background)",
  "action-over-media": "var(--color-action-over-media-background)",
  "action-soft-emphasis": "var(--color-action-soft-emphasis-background)",
  "action-standard": "var(--color-action-standard-background)",
  "action-sub-emphasis": "var(--color-action-sub-emphasis-background)",
  "action-subtle": "var(--color-action-subtle-background)",
  "action-utility": "var(--color-action-utility-background)",
};

export const BORDER_COLORS = {
  ...BASE_COLORS,

  default: "var(--color-stroke-default)",
  emphasis: "var(--color-stroke-emphasis)",
  muted: "var(--color-stroke-muted)",
  "action-alert": "var(--color-action-alert-border)",
  "action-emphasis": "var(--color-action-emphasis-border)",
  "action-link": "var(--color-action-link-border)",
  "action-over-media": "var(--color-action-over-media-border)",
  "action-soft-emphasis": "var(--color-action-soft-emphasis-border)",
  "action-standard": "var(--color-action-standard-border)",
  "action-sub-emphasis": "var(--color-action-sub-emphasis-border)",
  "action-subtle": "var(--color-action-subtle-border)",
  "action-utility": "var(--color-action-utility-border)",
};

export const CONTENT_COLORS = {
  ...BASE_COLORS,

  "action-alert": "var(--color-action-alert-foreground)",
  "action-emphasis": "var(--color-action-emphasis-foreground)",
  "action-link": "var(--color-action-link-foreground)",
  "action-over-media": "var(--color-action-over-media-foreground)",
  "action-soft-emphasis": "var(--color-action-soft-emphasis-foreground)",
  "action-standard": "var(--color-action-standard-foreground)",
  "action-sub-emphasis": "var(--color-action-sub-emphasis-foreground)",
  "action-subtle": "var(--color-action-subtle-foreground)",
  "action-utility": "var(--color-action-utility-foreground)",
};

export const BREAKPOINTS = {
  xsmall: 360,
  small: 600,
  medium: 1140,
  large: 1520,
  xlarge: 1920,
};

export const MARGIN = {
  none: "var(--margin-none)",
  small: "var(--margin-small)",
  medium: "var(--margin-medium)",
  large: "var(--margin-large)",
};

export const PADDING = {
  none: "var(--padding-none)",
  xxsmall: "var(--padding-xxsmall)",
  xsmall: "var(--padding-xsmall)",
  small: "var(--padding-small)",
  medium: "var(--padding-medium)",
  large: "var(--padding-large)",
  xlarge: "var(--padding-xlarge)",
  xxlarge: "var(--padding-xxlarge)",
};

export const RADIUS = {
  none: "var(--radius-none)",
  xsmall: "var(--radius-xsmall)",
  small: "var(--radius-small)",
  medium: "var(--radius-medium)",
  large: "var(--radius-large)",
  circle: "var(--radius-circle)",
};

export const GAP = {
  none: "var(--gap-none)",
  xxsmall: "var(--gap-xxsmall)",
  xsmall: "var(--gap-xsmall)",
  small: "var(--gap-small)",
  medium: "var(--gap-medium)",
  large: "var(--gap-large)",
  xlarge: "var(--gap-xlarge)",
  xxlarge: "var(--gap-xxlarge)",
};

export const SIZE = {
  0: "var(--size-0)",
  50: "var(--size-50)",
  100: "var(--size-100)",
  150: "var(--size-150)",
  200: "var(--size-200)",
  250: "var(--size-250)",
  300: "var(--size-300)",
  350: "var(--size-350)",
  400: "var(--size-400)",
  450: "var(--size-450)",
  500: "var(--size-500)",
  550: "var(--size-550)",
  600: "var(--size-600)",
  700: "var(--size-700)",
  800: "var(--size-800)",
  850: "var(--size-850)",
  900: "var(--size-900)",
  1000: "var(--size-1000)",
  1100: "var(--size-1100)",
  1200: "var(--size-1200)",
  1300: "var(--size-1300)",
  1400: "var(--size-1400)",
  1500: "var(--size-1500)",
  1600: "var(--size-1600)",
  1700: "var(--size-1700)",
  1800: "var(--size-1800)",
  1900: "var(--size-1900)",
  2000: "var(--size-2000)",
  2100: "var(--size-2100)",
  2200: "var(--size-2200)",
  2300: "var(--size-2300)",
  2400: "var(--size-2400)",
  2500: "var(--size-2500)",
  2600: "var(--size-2600)",
  2700: "var(--size-2700)",
  2800: "var(--size-2800)",
  2900: "var(--size-2900)",
  3000: "var(--size-3000)",
};

export const TEXT_ALIGN = {
  left: "left",
  center: "center",
  right: "right",
  justify: "justify",
  start: "start",
  end: "end",
};

export const VERTICAL_ALIGN = {
  baseline: "baseline",
  top: "top",
  middle: "middle",
  bottom: "bottom",
  "text-top": "text-top",
  "text-bottom": "text-bottom",
  sub: "sub",
  super: "super",
};

export const STROKE = {
  none: "var(--stroke-none)",
  standard: "var(--stroke-standard)",
  thin: "var(--stroke-thin)",
  thick: "var(--stroke-thick)",
  thicker: "var(--stroke-thicker)",
};
