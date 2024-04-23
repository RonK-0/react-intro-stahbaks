/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      container: {
        center: true,
        // padding: "4rem",
      },
      colors: {
        'accent' : '#00754a',
        'primary' : '#006241',
      }
    },
  },
  plugins: [],
}