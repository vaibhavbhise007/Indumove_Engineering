/** @type {import('tailwindcss').Config} */
const flowbitePlugin = require('flowbite/plugin');

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        "bg-primary": "#F9FAFB",
        "bg-secondary": "#FFFFFF",
        "text-primary": "#333333",
        "text-secondary": "#555555",
        "text-accent": "#1A73E8",
        "border-color": "#E5E7EB",
        "button-primary": "#1A73E8",
        "button-primary-hover": "#1558B2",
        "button-secondary": "#F3F4F6",
        "highlight-bg": "#F1F5F9",
        "success-color": "#34A853",
        "warning-color": "#FBBC05",
      },
      animation: {
        fadeInDown: 'fadeInDown 1s ease-out',
      },
      keyframes: {
        fadeInDown: {
          '0%': { opacity: '0', transform: 'translateY(-20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      fontFamily: {
        'fira-condensed': ['"Fira Sans Condensed"', 'sans-serif'],
      },
    },
  },
  darkMode: "class", // Enables dark mode toggle with a class
  plugins: [flowbitePlugin],
};
