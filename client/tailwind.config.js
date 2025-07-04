/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#dc2626",
          light: "#fca5a5",
          dark: "#7f1d1d",
        },
        secondary: "#991b1b",
      },
    },
  },
  plugins: [],
};
