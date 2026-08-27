import type { PresetsConfig as TTailwindPresetsConfig } from "tailwindcss/types/config";

import theme from "./preset/theme";
import corePlugins from "./preset/core";

import { utilitiesPlugin } from "./preset/plugins/utilities";

import { iconsPlugin } from "./preset/plugins/icons.generated";
import { typographyPlugin } from "./preset/plugins/typography.generated";

export default {
  darkMode: "selector",
  corePlugins,
  theme,
  plugins: [utilitiesPlugin, typographyPlugin, iconsPlugin],
} as TTailwindPresetsConfig;
