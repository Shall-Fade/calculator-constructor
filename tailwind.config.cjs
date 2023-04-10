/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: "Inter",
      },
      colors: {
        "light-gray": "#F3F4F6",
        "medium-gray": "#4D5562",
        "dark-gray": "#111827",
        "blue-iris": "#5D5FEF",
      },
    },
  },
  plugins: [],
};
