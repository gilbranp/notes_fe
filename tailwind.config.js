/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/nativewind/dist/**/*.js",  // Menambahkan path untuk NativeWind
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require("nativewind/tailwind-plugin"),  // Pastikan plugin NativeWind terpasang
  ],
};
