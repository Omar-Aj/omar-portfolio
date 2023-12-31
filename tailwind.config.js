/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./layout/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "texture-desktop":
          "url('../public/assets/images/bg-texture-desktop.jpg')",
        "texture-mobile":
          "url('../public/assets/images/bg-texture-mobile.jpg')",
        "gradient-hero": "url('../public/assets/images/bg-gradient-hero.png')",
      },
      colors: {
        "theme-red": "#e63946",
        "theme-white": "#f1faee",
        "theme-sky": "#a8dadc",
        "theme-blue": "#457b9d",
        "theme-d-blue": "#1d3557",
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
