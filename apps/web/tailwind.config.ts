import type { Config } from "tailwindcss";
import baseConfig from "@hub/config/tailwind.preset.cjs";

const config: Config = {
  presets: [baseConfig],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "../../packages/ui/src/**/*.{ts,tsx}"
  ],
  theme: {},
  plugins: []
};

export default config;
