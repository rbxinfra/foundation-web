import path from 'node:path';

import type { StorybookConfig } from '@storybook/react-vite';
import postcssImport from 'postcss-import';
import tailwindcss from 'tailwindcss';

const config = {
  stories: ['../stories/Introduction.mdx', '../packages/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: ['@storybook/addon-a11y', '@storybook/addon-docs'],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  viteFinal: async (viteConfig) => ({
    ...viteConfig,
    build: {
      ...viteConfig.build,
      cssMinify: false,
    },
    css: {
      ...viteConfig.css,
      transformer: 'postcss',
      postcss: {
        plugins: [
          postcssImport(),
          tailwindcss({
            config: path.resolve(process.cwd(), '.storybook', 'tailwind.config.ts'),
          }),
        ],
      },
    },
  }),
} satisfies StorybookConfig;

export default config;
