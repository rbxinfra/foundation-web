import plugin from "tailwindcss/plugin";

import { TYPOGRAPHY } from "../typography";

export const typographyPlugin = plugin(({ addUtilities }) => {
  // text-*
  // typography has font and letterSpacing defined:
  // { font: "var(--typography-body-small-font)", letterSpacing: "var(--typography-body-small-letter-spacing)" }
  for (const [key, value] of Object.entries(TYPOGRAPHY)) {
    addUtilities({
      [`.text-${key}`]: value,
    });
  }
});
