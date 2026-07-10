import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        white: "#FFFFFF",
        gold: {
          DEFAULT: "#D4AF37",
          soft: "#F6E7B2",
          deep: "#B8912A",
        },
        cream: "#FAF8F3",
        beige: "#F5F1E6",
        charcoal: {
          DEFAULT: "#2A2A2A",
          light: "#4A4A47",
        },
        graylight: "#F9F9F9",
        lotus: "#E8A0BF",
        forest: "#3F5B44",
      },
      fontFamily: {
        display: ["var(--font-cormorant)", "serif"],
        body: ["var(--font-inter)", "sans-serif"],
        quote: ["var(--font-playfair)", "serif"],
      },
      letterSpacing: {
        widest2: "0.25em",
      },
      animation: {
        "float-slow": "float 8s ease-in-out infinite",
        "float-slower": "float 12s ease-in-out infinite",
        shimmer: "shimmer 2.5s linear infinite",
        "spin-slow": "spin 20s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0) rotate(0deg)" },
          "50%": { transform: "translateY(-18px) rotate(4deg)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
