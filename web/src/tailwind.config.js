/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
    fontFamily: {
  sans: ['Poppins', 'sans-serif'], // reemplaza la fuente base
  poppins: ['Poppins', 'sans-serif'],
},
    },
  },
  safelist: [
    'space-y-6',
    'space-y-8',
    'space-y-10',
    'space-y-12',
    'gap-4',
    'gap-6',
    'gap-8',
  ],
  plugins: [],
}
