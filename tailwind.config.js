/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "theme-black-900": "#141517",
        "theme-black-800": "#161616",
        "theme-black-700": "#25272C",
      },
    },
  },
  plugins: [],
};
