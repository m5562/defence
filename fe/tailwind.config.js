/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        "blue-gem": {
          50: "#f4f1ff",
          100: "#ebe6ff",
          200: "#dad0ff",
          300: "#beaaff",
          400: "#9f79ff",
          500: "#8343ff",
          600: "#781dff",
          700: "#6a0cf5",
          800: "#5809ce",
          900: "#430999",
          950: "#2b0273",
        },

        bae: {
          50: "#fcf5ff",
          100: "#f7e7ff",
          200: "#f0d4ff",
          300: "#e5b2ff",
          400: "#d581ff",
          500: "#c451fb",
          600: "#b32eef",
          700: "#9c1dd3",
          800: "#831dac",
          900: "#6b198a",
          950: "#540572",
        },
        snuff: {
          50: "#fbf5fe",
          100: "#f6eafd",
          200: "#f1dffb",
          300: "#e1b3f4",
          400: "#ce85ed",
          500: "#b756df",
          600: "#9c36c3",
          700: "#842aa1",
          800: "#6d2484",
          900: "#5c236c",
          950: "#3a0b47",
        },
      },
    },
  },
  plugins: [],
};
