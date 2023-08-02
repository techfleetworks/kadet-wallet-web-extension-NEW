module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  important: "#__root",
  theme: {
    extend: {
      colors: {
        primary: "#86D992",
        secondary: "#005321",
        inactive: "#101413",
        background: "#101413",
        backgroundSecondary: "#8B9389",
        fontPrimary: "#F2F2F2",
        fontSecondary: "#C4C7C5",
        fontHighlight: "#86D992",
        borderActive: "#86D992",
        borderInactive: "#101413",
        borderButton: "#8B9389",
        borderWhite: "#F4F2EE",
      },
      fontFamily: {
        sans: ["work-sans"],
      },
    },
  },
  borderRadius: {
    lg: `var(--radius)`,
    md: `calc(var(--radius) - 2px)`,
    sm: "calc(var(--radius) - 4px)",
  },
  keyframes: {
    "accordion-down": {
      from: { height: 0 },
      to: { height: "var(--radix-accordion-content-height)" },
    },
    "accordion-up": {
      from: { height: "var(--radix-accordion-content-height)" },
      to: { height: 0 },
    },
  },
  animation: {
    "accordion-down": "accordion-down 0.2s ease-out",
    "accordion-up": "accordion-up 0.2s ease-out",
  },
  prefix: "",
  plugins: ["tailwindcss-animate"],
  corePlugins: {
    preflight: true,
    quickSuggestions: true,
    strings: true,
  },
};
