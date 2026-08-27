/**
 * The breakpoint constants for from the Builder Design Tokens. (The breakpoints are used for responsive design)
 * 
 * The breakpoints are defined as follows:
 * - xsmall: 1px to 360px
 * - small: 361px to 600px
 * - medium: 601px to 1140px
 * - large: 1141px to 1520px
 * - xlarge: 1521px to 1920px
 * - xxlarge: 1921px and above
 * 
 * See the Please see [Figma @ 3320-2910](https://www.figma.com/proto/17pK8lmQyCS3R01dMIXIR9/Builder-Design-Tokens?node-id=3320-2910&t=LpBKQjGbn9U2vjE0-1&scaling=min-zoom&content-scaling=fixed&page-id=14%3A1398)
 * for more information on the breakpoints and their usage in the design system.
 */
const BREAKPOINT = {
  xsmall: {
    start: 1,
    end: 360,
  },

  small: {
    start: 361,
    end: 600,
  },

  medium: {
    start: 601,
    end: 1140,
  },

  large: {
    start: 1141,
    end: 1520,
  },

  xlarge: {
    start: 1521,
    end: 1920,
  },

  xxlarge: {
    start: 1921,
    end: Infinity,
  },
} as const;

/**
 * This is the list of screens to be used in the Tailwind preset. (The screens are used for responsive design)
 * 
 * Based on the breakpoints defined in the BREAKPOINT constant.
 * 
 * See the Please see [Figma @ 3320-2910](https://www.figma.com/proto/17pK8lmQyCS3R01dMIXIR9/Builder-Design-Tokens?node-id=3320-2910&t=LpBKQjGbn9U2vjE0-1&scaling=min-zoom&content-scaling=fixed&page-id=14%3A1398)
 */
export const SCREEN = {
  xsmall: `${BREAKPOINT.xsmall.start}px`,
  small: `${BREAKPOINT.small.start}px`,
  medium: `${BREAKPOINT.medium.start}px`,
  large: `${BREAKPOINT.large.start}px`,
  xlarge: `${BREAKPOINT.xlarge.start}px`,
  xxlarge: `${BREAKPOINT.xxlarge.start}px`,
} as const;
