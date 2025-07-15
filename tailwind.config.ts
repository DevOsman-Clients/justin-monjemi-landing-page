import type { Config } from "tailwindcss"
import defaultConfig from "shadcn/ui/tailwind.config"

const config: Config = {
  ...defaultConfig,
  content: [
    ...defaultConfig.content,
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    ...defaultConfig.theme,
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      ...defaultConfig.theme.extend,
      colors: {
        ...defaultConfig.theme.extend.colors,
        primary: {
          ...defaultConfig.theme.extend.colors.primary,
          DEFAULT: "#032445",
          foreground: "#ffffff",
        },
        secondary: {
          ...defaultConfig.theme.extend.colors.secondary,
          DEFAULT: "#D29D33",
          foreground: "#032445",
        },
        accent: {
          ...defaultConfig.theme.extend.colors.accent,
          DEFAULT: "#f1f5f9",
          foreground: "#032445",
        },
        muted: {
          ...defaultConfig.theme.extend.colors.muted,
          DEFAULT: "#f8fafc",
          foreground: "#64748b",
        },
      },
      animation: {
        ...defaultConfig.theme.extend.animation,
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [...defaultConfig.plugins, require("tailwindcss-animate")],
} satisfies Config

export default config
