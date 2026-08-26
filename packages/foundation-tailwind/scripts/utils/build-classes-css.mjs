import { readFileSync } from "node:fs";

import { buildThemeClassesCss } from "./build-theme-classes-css.mjs";

export function buildClassesCss() {
  const baseClasses = readFileSync("./css/classes.css", "utf8");
  const {
    lightThemeClass,
    darkThemeClass,
    systemLightThemeClass,
    systemDarkThemeClass,
  } = buildThemeClassesCss();

  const css = [
    baseClasses,
    lightThemeClass,
    darkThemeClass,
    systemLightThemeClass,
    `@media (prefers-color-scheme: dark) {\n${systemDarkThemeClass}\n}`,
  ];

  return css.join("\n");
}
