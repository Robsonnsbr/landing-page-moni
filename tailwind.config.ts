/* cSpell:disable */
import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        "fade-in": "fade-in 0.2s ease-in 0.3s forwards",
      },
      screens: {
        "3xl": "1920px",
      },

      fontFamily: {
        raleway: ["var(--font-raleway)"],
        openSans: ["var(--font-open-sans)"],
        poppins: ["var(--font-poppins)"],
      },
      colors: {
        background: "var(--color-bg)",

        deepIndigoBlue: "var(--deepIndigoBlue)",
        mediumBlueGray: "var(--mediumBlueGray)",
        lightBlueGray: "var(--lightBlueGray)",
        LightGray: "var(--LightGray)",
        mediumApricotSalmon: "var(--mediumApricotSalmon)",
        lightApricotSalmon: "var(--lightApricotSalmon)",
        extraLightBlueGray: "var(--extraLightBlueGray)",
        success: "var(--success)",
        active: "var(--active)",
        error: "var(--error)",
      },
      backgroundImage: {
        "hero-section": 'url("/background/background-hero.webp")',
      },
    },
  },
  plugins: [],
} satisfies Config;
