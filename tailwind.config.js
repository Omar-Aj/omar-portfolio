/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./layout/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(circle, var(--tw-gradient-stops))",
        "hero-pattern": "url('/public/assets/textures/black-felt.png')",
      },
      colors: {
        "theme-red": "#e63946",
        "theme-white": "#f1faee",
        "theme-sky": "#a8dadc",
        "theme-blue": "#457b9d",
        "theme-d-blue": "#1d3557",
      },
      height: {
        sectionH: "52rem",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
