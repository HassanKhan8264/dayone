// tailwind.config.js
const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./src/**/*.{html,ts}", // Ensure Tailwind scans your files for class names
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "var(--primary-color-50)",
          100: "var(--primary-color-100)",
          200: "var(--primary-color-200)",
          300: "var(--primary-color-300)",
          400: "var(--primary-color-400)",
          500: "var(--primary-color-500)",
          600: "var(--primary-color-600)",
          700: "var(--primary-color-700)",
          800: "var(--primary-color-800)",
          900: "var(--primary-color-900)",
        },
        secondary: {
          50: "var(--secondary-color-50)",
          100: "var(--secondary-color-100)",
          200: "var(--secondary-color-200)",
          300: "var(--secondary-color-300)",
          400: "var(--secondary-color-400)",
          500: "var(--secondary-color-500)",
          600: "var(--secondary-color-600)",
          700: "var(--secondary-color-700)",
          800: "var(--secondary-color-800)",
          900: "var(--secondary-color-900)",
          1000: "var(--secondary-color-1000)",
        },
        black: {
          50: "var(--black-color-50)",
          100: "var(--black-color-100)",
          200: "var(--black-color-200)",
          300: "var(--black-color-300)",
          400: "var(--black-color-400)",
          500: "var(--black-color-500)",
          600: "var(--black-color-600)",
          700: "var(--black-color-700)",
          800: "var(--black-color-800)",
          900: "var(--black-color-900)",
        },
        white: {
          50: "var(--white-color-50)",
          100: "var(--white-color-100)",
          200: "var(--white-color-200)",
          300: "var(--white-color-300)",
          400: "var(--white-color-400)",
          500: "var(--white-color-500)",
          600: "var(--white-color-600)",
          700: "var(--white-color-700)",
          800: "var(--white-color-800)",
          900: "var(--white-color-900)",
        },
        accent: {
          50: "var(--accent-color-50)",
          100: "var(--accent-color-100)",
          200: "var(--accent-color-200)",
          300: "var(--accent-color-300)",
          400: "var(--accent-color-400)",
          500: "var(--accent-color-500)",
          600: "var(--accent-color-600)",
          700: "var(--accent-color-700)",
          800: "var(--accent-color-800)",
          900: "var(--accent-color-900)",
        },
      },
    },
  },
  plugins: [],
};
