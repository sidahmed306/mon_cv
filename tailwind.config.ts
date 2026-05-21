import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        terminal: {
          bg: "rgb(var(--terminal-bg) / <alpha-value>)",
          surface: "rgb(var(--terminal-surface) / <alpha-value>)",
          border: "rgb(var(--terminal-border) / <alpha-value>)",
          green: "rgb(var(--terminal-green) / <alpha-value>)",
          cyan: "rgb(var(--terminal-cyan) / <alpha-value>)",
          yellow: "rgb(var(--terminal-yellow) / <alpha-value>)",
          purple: "rgb(var(--terminal-purple) / <alpha-value>)",
          red: "rgb(var(--terminal-red) / <alpha-value>)",
          blue: "rgb(var(--terminal-blue) / <alpha-value>)",
          text: "rgb(var(--terminal-text) / <alpha-value>)",
          heading: "rgb(var(--terminal-heading) / <alpha-value>)",
          dim: "rgb(var(--terminal-dim) / <alpha-value>)",
          comment: "rgb(var(--terminal-comment) / <alpha-value>)",
        },
      },
      fontFamily: {
        mono: ['"JetBrains Mono"', '"Fira Code"', "Menlo", "Monaco", "monospace"],
      },
      animation: {
        blink: "blink 1s step-end infinite",
        "fade-in": "fadeIn 0.3s ease-in",
        "slide-up": "slideUp 0.4s ease-out",
      },
      keyframes: {
        blink: {
          "0%, 50%": { opacity: "1" },
          "50.01%, 100%": { opacity: "0" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
