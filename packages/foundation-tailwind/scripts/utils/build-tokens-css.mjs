import { flattenTokens } from "./flatten-tokens.mjs";
import {
  flatten,
  tokenPathToCssVarName,
  aliasesToVarNames,
} from "./token-utils.mjs";

import defaultTokensSource from "../../tokens/Default.tokens.json" with { type: "json" };
import typographyTokensSource from "../../tokens/Typography.tokens.json" with { type: "json" };
import breakpointsTokensSource from "../../tokens/Breakpoints.tokens.json" with { type: "json" };

const FONT_WEIGHT_VALUES = {
  Light: 300,
  Regular: 400,
  Medium: 500,
  SemiBold: 600,
  Bold: 700,
  ExtraBold: 800,
};

export function buildTokensCssVars() {
  const defaultTokens = flattenTokens(defaultTokensSource);
  const typographyTokens = flattenTokens(typographyTokensSource);
  const breakpointsTokens = flattenTokens(breakpointsTokensSource, false);

  // Remap font weight aliases to numeric values for CSS output.
  defaultTokens.FontWeight = Object.fromEntries(
    Object.entries(defaultTokens.FontWeight).map(([k, v]) => [
      k,
      FONT_WEIGHT_VALUES[v] || v,
    ]),
  );

  // Remap letter-spacing to em values
  defaultTokens.LetterSpacing = Object.fromEntries(
    Object.entries(defaultTokens.LetterSpacing).map(([k, v]) => [k, `${v}em`]),
  );

  const rootLines = [];

  rootLines.push(
    ...Object.entries(flatten(defaultTokens)).map(([k, v]) => `  ${k}: ${v};`),
  );

  function buildTypographyLines(name, typographyToken) {
    const fontLine = `  --typography-${tokenPathToCssVarName(name)}-font: ${typographyToken.FontWeight} ${typographyToken.FontSize}/${typographyToken.LineHeight} ${typographyToken.FontFamily};`;
    const letterSpacingLine = `  --typography-${tokenPathToCssVarName(name)}-letter-spacing: ${typographyToken.LetterSpacing};`;

    return [
      aliasesToVarNames(fontLine) || fontLine,
      aliasesToVarNames(letterSpacingLine) || letterSpacingLine,
    ];
  }

  rootLines.push(
    ...Object.entries(typographyTokens).flatMap(([name, token]) =>
      buildTypographyLines(name, token),
    ),
  );

  rootLines.push(
    ...Object.entries(flatten(breakpointsTokens)).map(
      ([k, v]) => `  ${k}: ${v}px;`,
    ),
  );

  return rootLines.join("\n") + "\n";
}
