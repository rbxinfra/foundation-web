import { flattenTokens } from './flatten-tokens.mjs';
import { flatten } from './token-utils.mjs';

import darkTokensSource from '../../tokens/Color Mode/Dark.tokens.json' with { type: 'json' };
import lightTokensSource from '../../tokens/Color Mode/Light.tokens.json' with { type: 'json' };

export function buildThemeClassesCss() {
  const darkTokens = flattenTokens(darkTokensSource);
  const lightTokens = flattenTokens(lightTokensSource);

  function themeBlock(tokens, scheme) {
    const lines = [
      `  color-scheme: ${scheme};`,
      ...Object.entries(flatten(tokens)).map(([k, v]) => `  ${k}: ${v};`),
    ];

    return lines;
  }

  const systemLightThemeBlock = themeBlock(lightTokens, 'light dark');
  const systemDarkThemeBlock = themeBlock(darkTokens, 'dark light');

  const lightThemeBlock = themeBlock(lightTokens, 'light');
  const darkThemeBlock = themeBlock(darkTokens, 'dark');

  const lightThemeSelector = `.light-theme`;
  const darkThemeSelector = `.dark-theme`;
  const systemThemeSelector = `.system-theme`;

  const lightThemeClass = `${lightThemeSelector} {\n${lightThemeBlock.map((l) => `  ${l}`).join('\n')}\n}`;
  const darkThemeClass = `${darkThemeSelector} {\n${darkThemeBlock.map((l) => `  ${l}`).join('\n')}\n}`;
  const systemLightThemeClass = `${systemThemeSelector} {\n${systemLightThemeBlock.map((l) => `  ${l}`).join('\n')}\n}`;
  const systemDarkThemeClass = `  ${systemThemeSelector} {\n${systemDarkThemeBlock.map((l) => `  ${l}`).join('\n')}\n  }`;

  return {
    lightThemeClass,
    darkThemeClass,
    systemLightThemeClass,
    systemDarkThemeClass,
  };
}
