import { mkdirSync, writeFileSync } from "node:fs";

import { buildTokensCssVars } from "./utils/build-tokens-css.mjs";
import { buildBaseThemeCssVars } from "./utils/build-base-theme-css.mjs";
import { buildClassesCss } from "./utils/build-classes-css.mjs";

let tokensCss = buildTokensCssVars();
const { systemLightThemeBlock, systemDarkThemeBlock } = buildBaseThemeCssVars();
const classesCss = buildClassesCss();

tokensCss += systemLightThemeBlock;

const rootBlock = `:root {\n${tokensCss}\n}`;
const darkRootBlock = `@media (prefers-color-scheme: dark) {\n  :root {\n${systemDarkThemeBlock}\n  }\n}`;

const css = [rootBlock, darkRootBlock, classesCss].join("\n");

mkdirSync("./dist/css", {
  recursive: true,
});
writeFileSync("./dist/css/index.css", css);
// oxlint-disable-next-line no-console
console.log("dist/css/index.css written");
