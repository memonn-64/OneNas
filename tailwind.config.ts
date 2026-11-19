import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Green family, anchored on the two greens sampled out of the OneNas
        // mark: #236B3B (dark arrow / "One") and #9BC736 (light arrow / "Nas").
        "forest-deep": "#0A3F26",
        forest: "#14572F",
        "forest-mid": "#236B3B", // the logo's dark green, unchanged
        emerald: "#2B7A44", // 5.3:1 on white, so it is safe for small text
        "emerald-light": "#3E9553",
        "emerald-pale": "#B6DE7E",
        mint: "#EFF6E5",

        // Lime / teal — the logo's accent, and the step over to the blue.
        "teal-deep": "#0B4F5C",
        teal: "#0E7C8A",
        "teal-light": "#2FA8B5",
        lime: "#9BC736", // the logo's bright green, unchanged
        "lime-soft": "#D6EBA8",

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
        card: "0 1px 2px rgba(20,87,47,0.04), 0 12px 32px -12px rgba(20,87,47,0.12)",
        "card-hover": "0 2px 4px rgba(20,87,47,0.06), 0 24px 48px -16px rgba(20,87,47,0.22)",
      },
    },
  },
  plugins: [],
};
export default config;
