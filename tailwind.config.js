/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    // Make sure this line is present and correct if Login.jsx is in 'packages'
    "./packages/.{Login.jsx}"],
  theme: {
    extend: {},
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    styled: true,
    themes: true,
    base: true,
    utils: true,
    logs: false, // Set to false to avoid console logs from DaisyUI
    rtl: false,
    prefix: "",
    darkTheme: "dark",
  },
}