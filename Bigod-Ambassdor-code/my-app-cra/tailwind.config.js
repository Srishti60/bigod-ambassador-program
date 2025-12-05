/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      screens: {
        'xs':'600px',
        'md': '700px',
        'lg': '1400px',
        'xl': '1800px',
      },
    },
  },
  plugins: [],
}
