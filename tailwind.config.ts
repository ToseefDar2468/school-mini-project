import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#f7f9fc",
        foreground: "#0b1220",
        surface: "#ffffff",
        card: "#ffffff",
        "card-foreground": "#0b1220",
        border: "#d7dee8",
        muted: "#e9eef6",
        "muted-foreground": "#5d6b82",
        primary: "#1f4aa8",
        "primary-foreground": "#ffffff",
        secondary: "#0f766e",
        "secondary-foreground": "#ffffff",
        accent: "#c58f2a",
        "accent-foreground": "#1a1205",
        ring: "#1f4aa8",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 12px 30px -16px rgba(12, 20, 33, 0.25)",
        card: "0 16px 40px -28px rgba(16, 24, 40, 0.55)",
      },
      borderRadius: {
        xl: "1rem",
      },
      backgroundImage: {
        "radial-fade":
          "radial-gradient(circle at top, rgba(31, 74, 168, 0.16), transparent 60%)",
      },
    },
  },
  plugins: [],
};

export default config;
