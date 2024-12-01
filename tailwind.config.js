/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Poppins", "sans-serif"],
    },
    extend: {
      colors: {
        primary: "#00adb5",
        darkGray: "#818181",
        textGray: "#9A9C9F",
      },
    },
  },
  plugins: [],
};
