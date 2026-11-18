import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Green family — the brand anchor, dark to light.
        "forest-deep": "#073B24",
        forest: "#0F5132",
        "forest-mid": "#166F45",
        emerald: "#198754",
        "emerald-light": "#1f9e6a",
        "emerald-pale": "#8FE3BE",
        mint: "#E9F6EF",

        // Teal / lime — the bridge between the green and the blue.
        "teal-deep": "#0B4F5C",
        teal: "#0E7C8A",
        "teal-light": "#2FA8B5",
        lime: "#5FD9A4",
        "lime-soft": "#C3F1DB",

        // Blue family.
        "royal-deep": "#152C66",
        royal: "#1E3A8A",
        "royal-mid": "#2563EB",
        "royal-light": "#3B82F6",
        "sky-tint": "#EFF4FD",

        charcoal: "#2B2F33",
        "gray-soft": "#F4F6F5",
        "gray-line": "#E3E8E5",
        trust: "#1B5E8C",
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        sans: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        container: "1240px",
      },
      letterSpacing: {
        tightest: "-0.04em",
      },
      boxShadow: {
        card: "0 1px 2px rgba(15,81,50,0.04), 0 12px 32px -12px rgba(15,81,50,0.12)",
        "card-hover": "0 2px 4px rgba(15,81,50,0.06), 0 24px 48px -16px rgba(15,81,50,0.22)",
      },
    },
  },
  plugins: [],
};
export default config;
