import { flattenTokens } from './flatten-tokens.mjs';
import { flatten } from './token-utils.mjs';

import darkTokensSource from '../../tokens/Color Mode/Dark.tokens.json' with { type: 'json' };
import lightTokensSource from '../../tokens/Color Mode/Light.tokens.json' with { type: 'json' };

export function buildBaseThemeCssVars() {
  const darkTokens = flattenTokens(darkTokensSource);
  const lightTokens = flattenTokens(lightTokensSource);

  // Theme-scope overrides: same semantic resolution, different source mode.
  function themeBlock(tokens, scheme) {
    const lines = [
      `  color-scheme: ${scheme};`,
      ...Object.entries(flatten(tokens)).map(([k, v]) => `  ${k}: ${v};`),
    ];

    return lines;
  }

  const systemLightThemeBlock = themeBlock(lightTokens, 'light dark').join(
    '\n',
  );
  const systemDarkThemeBlock = themeBlock(darkTokens, 'dark light')
    .map((l) => `  ${l}`)
    .join('\n');

  return {
    systemLightThemeBlock,
    systemDarkThemeBlock,
  };
}
