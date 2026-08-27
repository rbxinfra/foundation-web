import plugin from "tailwindcss/plugin";
import { TRANSITION } from "../constants/transition";

/** All base utilities */
export const utilitiesPlugin = plugin(
  ({ matchUtilities, theme, addUtilities }) => {
    // Content color override
    matchUtilities(
      { content: (value) => ({ color: value }) },
      { values: theme("colors") },
    );

    // m-*, p-*, w-*, h-*, and so on replaced
    // with full names like margin-*, padding-*, width-*, height-* to avoid conflicts with existing Tailwind classes
    matchUtilities(
      { margin: (value) => ({ margin: value }) },
      { values: theme("margin") },
    );

    matchUtilities(
      { "margin-x": (value) => ({ marginLeft: value, marginRight: value }) },
      { values: theme("margin") },
    );

    matchUtilities(
      { "margin-y": (value) => ({ marginTop: value, marginBottom: value }) },
      { values: theme("margin") },
    );

    matchUtilities(
      { "margin-top": (value) => ({ marginTop: value }) },
      { values: theme("margin") },
    );

    matchUtilities(
      { "margin-bottom": (value) => ({ marginBottom: value }) },
      { values: theme("margin") },
    );

    matchUtilities(
      { "margin-left": (value) => ({ marginLeft: value }) },
      { values: theme("margin") },
    );

    matchUtilities(
      { "margin-right": (value) => ({ marginRight: value }) },
      { values: theme("margin") },
    );

    matchUtilities(
      { padding: (value) => ({ padding: value }) },
      { values: theme("padding") },
    );

    matchUtilities(
      { "padding-x": (value) => ({ paddingLeft: value, paddingRight: value }) },
      { values: theme("padding") },
    );

    matchUtilities(
      { "padding-y": (value) => ({ paddingTop: value, paddingBottom: value }) },
      { values: theme("padding") },
    );

    matchUtilities(
      { "padding-top": (value) => ({ paddingTop: value }) },
      { values: theme("padding") },
    );

    matchUtilities(
      { "padding-bottom": (value) => ({ paddingBottom: value }) },
      { values: theme("padding") },
    );

    matchUtilities(
      { "padding-left": (value) => ({ paddingLeft: value }) },
      { values: theme("padding") },
    );

    matchUtilities(
      { "padding-right": (value) => ({ paddingRight: value }) },
      { values: theme("padding") },
    );

    matchUtilities(
      { width: (value) => ({ width: value }) },
      { values: theme("width") },
    );

    matchUtilities(
      { height: (value) => ({ height: value }) },
      { values: theme("height") },
    );

    matchUtilities(
      { "min-width": (value) => ({ minWidth: value }) },
      { values: theme("minWidth") },
    );

    matchUtilities(
      { "max-width": (value) => ({ maxWidth: value }) },
      { values: theme("maxWidth") },
    );

    matchUtilities(
      { "min-height": (value) => ({ minHeight: value }) },
      { values: theme("minHeight") },
    );

    matchUtilities(
      { "max-height": (value) => ({ maxHeight: value }) },
      { values: theme("maxHeight") },
    );

    // text-align-x-* (text-align) and text-align-y-* (vertical-align) are not part of Tailwind, so we add them here
    matchUtilities(
      { "text-align-x": (value) => ({ textAlign: value }) },
      { values: theme("textAlign") },
    );

    matchUtilities(
      { "text-align-y": (value) => ({ verticalAlign: value }) },
      { values: theme("verticalAlign") },
    );

    addUtilities({
      ".text-wrap": { whiteSpace: "normal" },
      ".text-no-wrap": { whiteSpace: "nowrap" },
    });

    // wrap and no-wrap
    addUtilities({
      ".wrap": { flexWrap: "wrap" },
      ".no-wrap": { flexWrap: "nowrap" },
    });

    // clip, clip-x, clip-y, scroll, scroll-x, scroll-y
    addUtilities({
      ".clip": { overflow: "hidden" },
      ".no-clip": { overflow: "visible" },
      ".clip-x": { overflowX: "hidden" },
      ".no-clip-x": { overflowX: "visible" },
      ".clip-y": { overflowY: "hidden" },
      ".no-clip-y": { overflowY: "visible" },

      ".scroll": { overflow: "auto" },
      ".scroll-x": { overflowX: "auto" },
      ".scroll-y": { overflowY: "auto" },
    });

    // text-truncate-end/split/none
    addUtilities({
      ".text-truncate-end": {
        overflow: "hidden",
        textOverflow: "ellipsis",
      },
      ".text-truncate-split": {
        overflow: "hidden",
        textOverflow: "ellipsis",
      },
      ".text-truncate-none": {
        overflow: "visible",
        textOverflow: "clip",
      },
    });

    // stroke (base and per border color)
    matchUtilities(
      // base
      {
        stroke: (value) => ({
          borderStyle: "solid",
          borderWidth: value,
          boxSizing: "border-box",
        }),
      },
      { values: theme("borderWidth") },
    );

    matchUtilities(
      // per border color
      { stroke: (value) => ({ borderColor: value }) },
      { values: theme("borderColor") },
    );

    // Border radius
    matchUtilities(
      { radius: (value) => ({ borderRadius: value }) },
      { values: theme("borderRadius") },
    );

    // Flex grow
    addUtilities({
      ".grow": {
        flex: "1 0 auto",
      },
      ".shrink": {
        flex: "0 1 auto",
      },
      ".fill": {
        flex: "1 1 auto",
      },
    });

    matchUtilities(
      { grow: (value) => ({ flexGrow: value }) },
      { values: theme("flexGrow") },
    );

    // Ease
    matchUtilities(
      { ease: (value) => ({ transitionTimingFunction: value }) },
      { values: theme("transitionTimingFunction") },
    );

    // Transition property

    // Add .transition- prefix to each transition property
    const transitionProperties = Object.fromEntries(
      Object.entries(TRANSITION).map(([key, value]) => [
        `.transition-${key}`,
        value,
      ]),
    );

    addUtilities(transitionProperties);

    // Outline
    matchUtilities(
      {
        outline: (value) => {
          const { outline, outlineOffset } = value;
          const outlineProps: { outline?: string; outlineOffset?: string } = {
            outline,
          };

          if (outlineOffset) {
            outlineProps.outlineOffset = outlineOffset;
          }

          return outlineProps;
        },
      },
      { values: theme("outline") },
    );
  },
);
