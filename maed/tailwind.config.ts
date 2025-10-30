//tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        popover: "var(--color-bg-card)",
        "popover-foreground": "var(--color-text-primary)",
        accent: "var(--color-accent-primary)",
        "accent-foreground": "var(--color-text-button)",
        muted: "var(--color-border-primary)", // for separators
      },
    },
  },
  plugins: [],
};

export default config;
