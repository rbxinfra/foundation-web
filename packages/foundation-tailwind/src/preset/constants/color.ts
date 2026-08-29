/* BASE COLORS */

const NORMAL_BASE_COLOR = {
  none: 'var(--color-none)',
  'common-backdrop': 'var(--color-common-backdrop)',
  'common-heavy-divider': 'var(--color-common-heavy-divider)',
  'common-navigation-bar': 'var(--color-common-navigation-bar)',
  'common-scrim': 'var(--color-common-scrim)',
  'common-shadow': 'var(--color-common-shadow)',
  'common-shimmer': 'var(--color-common-shimmer)',
  'over-media-0': 'var(--color-over-media-0)',
  'over-media-100': 'var(--color-over-media-100)',
  'over-media-200': 'var(--color-over-media-200)',
  'over-media-300': 'var(--color-over-media-300)',
  'selection-start': 'var(--color-selection-start)',
  'selection-end': 'var(--color-selection-end)',
  'shift-100': 'var(--color-shift-100)',
  'shift-200': 'var(--color-shift-200)',
  'shift-300': 'var(--color-shift-300)',
  'shift-400': 'var(--color-shift-400)',
  'state-hover': 'var(--color-state-hover)',
  'state-idle': 'var(--color-state-idle)',
  'state-press': 'var(--color-state-press)',
  'surface-0': 'var(--color-surface-0)',
  'surface-100': 'var(--color-surface-100)',
  'surface-200': 'var(--color-surface-200)',
  'surface-300': 'var(--color-surface-300)',
  'system-alert': 'var(--color-system-alert)',
  'system-contrast': 'var(--color-system-contrast)',
  'system-emphasis': 'var(--color-system-emphasis)',
  'system-neutral': 'var(--color-system-neutral)',
  'system-success': 'var(--color-system-success)',
  'system-warning': 'var(--color-system-warning)',
} as const;

const INVERSE_BASE_COLOR = {
  'inverse-none': 'var(--inverse-none)',
  'inverse-common-backdrop': 'var(--inverse-common-backdrop)',
  'inverse-common-heavy-divider': 'var(--inverse-common-heavy-divider)',
  'inverse-common-navigation-bar': 'var(--inverse-common-navigation-bar)',
  'inverse-common-scrim': 'var(--inverse-common-scrim)',
  'inverse-common-shadow': 'var(--inverse-common-shadow)',
  'inverse-common-shimmer': 'var(--inverse-common-shimmer)',
  'inverse-over-media-0': 'var(--inverse-over-media-0)',
  'inverse-over-media-100': 'var(--inverse-over-media-100)',
  'inverse-over-media-200': 'var(--inverse-over-media-200)',
  'inverse-over-media-300': 'var(--inverse-over-media-300)',
  'inverse-selection-start': 'var(--inverse-selection-start)',
  'inverse-selection-end': 'var(--inverse-selection-end)',
  'inverse-shift-100': 'var(--inverse-shift-100)',
  'inverse-shift-200': 'var(--inverse-shift-200)',
  'inverse-shift-300': 'var(--inverse-shift-300)',
  'inverse-shift-400': 'var(--inverse-shift-400)',
  'inverse-state-hover': 'var(--inverse-state-hover)',
  'inverse-state-idle': 'var(--inverse-state-idle)',
  'inverse-state-press': 'var(--inverse-state-press)',
  'inverse-surface-0': 'var(--inverse-surface-0)',
  'inverse-surface-100': 'var(--inverse-surface-100)',
  'inverse-surface-200': 'var(--inverse-surface-200)',
  'inverse-surface-300': 'var(--inverse-surface-300)',
  'inverse-system-alert': 'var(--inverse-system-alert)',
  'inverse-system-contrast': 'var(--inverse-system-contrast)',
  'inverse-system-emphasis': 'var(--inverse-system-emphasis)',
  'inverse-system-neutral': 'var(--inverse-system-neutral)',
  'inverse-system-success': 'var(--inverse-system-success)',
  'inverse-system-warning': 'var(--inverse-system-warning)',
} as const;

const BASE_COLOR = {
  ...NORMAL_BASE_COLOR,
  ...INVERSE_BASE_COLOR,
} as const;

/* FOREGROUND COLORS -- CONTENT */

const NORMAL_FOREGROUND_COLOR = {
  default: 'var(--color-content-default)',
  emphasis: 'var(--color-content-emphasis)',
  link: 'var(--color-content-link)',
  muted: 'var(--color-content-muted)',
  'action-alert': 'var(--color-action-alert-foreground)',
  'action-emphasis': 'var(--color-action-emphasis-foreground)',
  'action-link': 'var(--color-action-link-foreground)',
  'action-over-media': 'var(--color-action-over-media-foreground)',
  'action-soft-emphasis': 'var(--color-action-soft-emphasis-foreground)',
  'action-standard': 'var(--color-action-standard-foreground)',
  'action-sub-emphasis': 'var(--color-action-sub-emphasis-foreground)',
  'action-subtle': 'var(--color-action-subtle-foreground)',
  'action-utility': 'var(--color-action-utility-foreground)',
} as const;

const INVERSE_FOREGROUND_COLOR = {
  'inverse-default': 'var(--inverse-content-default)',
  'inverse-emphasis': 'var(--inverse-content-emphasis)',
  'inverse-link': 'var(--inverse-content-link)',
  'inverse-muted': 'var(--inverse-content-muted)',
  'inverse-action-alert': 'var(--inverse-action-alert-foreground)',
  'inverse-action-emphasis': 'var(--inverse-action-emphasis-foreground)',
  'inverse-action-link': 'var(--inverse-action-link-foreground)',
  'inverse-action-over-media':
    'var(--inverse-action-over-media-foreground)',
  'inverse-action-soft-emphasis':
    'var(--inverse-action-soft-emphasis-foreground)',
  'inverse-action-standard': 'var(--inverse-action-standard-foreground)',
  'inverse-action-sub-emphasis':
    'var(--inverse-action-sub-emphasis-foreground)',
  'inverse-action-subtle': 'var(--inverse-action-subtle-foreground)',
  'inverse-action-utility': 'var(--inverse-action-utility-foreground)',
} as const;

/**
 * The foreground color constants for the Tailwind preset. (The foreground color constants content-*, which is css color prop)
 */
export const FOREGROUND_COLOR = {
  ...BASE_COLOR,

  ...NORMAL_FOREGROUND_COLOR,
  ...INVERSE_FOREGROUND_COLOR,
} as const;

/* BACKGROUND COLORS -- BG */

const NORMAL_BACKGROUND_COLOR = {
  'action-alert': 'var(--color-action-alert-background)',
  'action-emphasis': 'var(--color-action-emphasis-background)',
  'action-link': 'var(--color-action-link-background)',
  'action-over-media': 'var(--color-action-over-media-background)',
  'action-soft-emphasis': 'var(--color-action-soft-emphasis-background)',
  'action-standard': 'var(--color-action-standard-background)',
  'action-sub-emphasis': 'var(--color-action-sub-emphasis-background)',
  'action-subtle': 'var(--color-action-subtle-background)',
  'action-utility': 'var(--color-action-utility-background)',
} as const;

const INVERSE_BACKGROUND_COLOR = {
  'inverse-action-alert': 'var(--inverse-action-alert-background)',
  'inverse-action-emphasis': 'var(--inverse-action-emphasis-background)',
  'inverse-action-link': 'var(--inverse-action-link-background)',
  'inverse-action-over-media': 'var(--inverse-action-over-media-background)',
  'inverse-action-soft-emphasis':
    'var(--inverse-action-soft-emphasis-background)',
  'inverse-action-standard': 'var(--inverse-action-standard-background)',
  'inverse-action-sub-emphasis':
    'var(--inverse-action-sub-emphasis-background)',
  'inverse-action-subtle': 'var(--inverse-action-subtle-background)',
  'inverse-action-utility': 'var(--inverse-action-utility-background)',
} as const;

/**
 * The background color constants for the Tailwind preset. (The background color constants are used for background colors)
 */
export const BACKGROUND_COLOR = {
  ...BASE_COLOR,

  ...NORMAL_BACKGROUND_COLOR,
  ...INVERSE_BACKGROUND_COLOR,
} as const;

/* STROKE COLORS */

const NORMAL_STROKE_COLOR = {
  default: 'var(--color-stroke-default)',
  emphasis: 'var(--color-stroke-emphasis)',
  muted: 'var(--color-stroke-muted)',
  'action-alert': 'var(--color-action-alert-border)',
  'action-emphasis': 'var(--color-action-emphasis-border)',
  'action-link': 'var(--color-action-link-border)',
  'action-over-media': 'var(--color-action-over-media-border)',
  'action-soft-emphasis': 'var(--color-action-soft-emphasis-border)',
  'action-standard': 'var(--color-action-standard-border)',
  'action-sub-emphasis': 'var(--color-action-sub-emphasis-border)',
  'action-subtle': 'var(--color-action-subtle-border)',
  'action-utility': 'var(--color-action-utility-border)',
} as const;

const INVERSE_STROKE_COLOR = {
  'inverse-default': 'var(--inverse-stroke-default)',
  'inverse-emphasis': 'var(--inverse-stroke-emphasis)',
  'inverse-muted': 'var(--inverse-stroke-muted)',
  'inverse-action-alert': 'var(--inverse-action-alert-border)',
  'inverse-action-emphasis': 'var(--inverse-action-emphasis-border)',
  'inverse-action-link': 'var(--inverse-action-link-border)',
  'inverse-action-over-media': 'var(--inverse-action-over-media-border)',
  'inverse-action-soft-emphasis': 'var(--inverse-action-soft-emphasis-border)',
  'inverse-action-standard': 'var(--inverse-action-standard-border)',
  'inverse-action-sub-emphasis': 'var(--inverse-action-sub-emphasis-border)',
  'inverse-action-subtle': 'var(--inverse-action-subtle-border)',
  'inverse-action-utility': 'var(--inverse-action-utility-border)',
} as const;

/**
 * The stroke color constants for the Tailwind preset. (The stroke color constants are used for border colors)
 */
export const STROKE_COLOR = {
  ...(() => {
    // none is removed from the base color set because it
    // will conflict with stroke-none (which isn't a border-color utility, but a stroke-width utility)
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { none, ...baseColor } = BASE_COLOR;

    return {
      ...baseColor,

      ...NORMAL_STROKE_COLOR,
      ...INVERSE_STROKE_COLOR,
    };
  })(),
} as const;
