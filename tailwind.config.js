/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        iransans: ["IRANSansXFaNum"],
      },
      keyframes: {
        "gradient-move": {
          "0%": { "background-position": "100% 50%" },
          "100%": { "background-position": "0% 50%" },
        },
        "slide-down": {
          "0%": { transform: "translateY(-440px)", opacity: "0" },
          "100%": { transform: "translateY(-90px)", opacity: "1" },
        },
      },
      animation: {
        "gradient-x": "gradient-move 2s ease-in-out infinite alternate",
        "slide-down": "slide-down 2800ms ease-out both",
      },
    },
  },
  plugins: [],
};
