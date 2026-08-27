/**
 * Tailwind duration constants.
 * 
 * Adds extra duration values to the Tailwind preset for use in animations and transitions,
 * as well as overriding the default Tailwind duration values to match the design system.
 */
export const DURATION = {
  50: "var(--time-50)",
  100: "var(--time-100)",
  200: "var(--time-200)",
  300: "var(--time-300)",
  400: "var(--time-400)",
  500: "var(--time-500)",
  600: "var(--time-600)",
  700: "var(--time-700)",
  800: "var(--time-800)",
  900: "var(--time-900)",
  1000: "var(--time-1000)",
} as const;
