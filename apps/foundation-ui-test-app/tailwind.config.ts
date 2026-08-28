import type { Config } from "tailwindcss";
import foundationPreset from "@rbx/foundation-tailwind/preset";

const config: Config = {
  content: [
    "./modules/**/*.{html,js,jsx,ts,tsx}",
    "./pages/**/*.{html,js,jsx,ts,tsx}",
    "./node_modules/@rbx/foundation-ui/dist/**/*.{js,jsx}",
  ],
  presets: [foundationPreset],
};

export default config;