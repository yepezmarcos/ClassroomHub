import type { Config } from 'tailwindcss'
import preset from '@hub/config/tailwind.preset.cjs'
export default { content: ['./app/**/*.{ts,tsx}', '../../packages/ui/src/**/*.{ts,tsx}'], presets:[preset] } satisfies Config
