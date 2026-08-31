import type { Config } from 'tailwindcss';

import foundationPreset from '@rbx/foundation-tailwind/preset';

const config: Config = {
  content: [
    './packages/**/*.stories.{js,jsx,ts,tsx}',
    './packages/foundation-ui/src/**/*.{js,jsx,ts,tsx}',
  ],
  presets: [foundationPreset],
};

export default config;
