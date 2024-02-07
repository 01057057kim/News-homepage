/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        's-orange' : 'hsl(35, 77%, 62%)',
        's-red' : 'hsl(5, 85%, 63%)',
        'o-white' : 'hsl(36, 100%, 99%)',
        'g-blue' : 'hsl(233, 8%, 79%)',
        'd-g-blue' : 'hsl(236, 13%, 42%)',
        'v-d-blue' : 'hsl(240, 100%, 5%)',
      },
      fontFamily:{
        'inter' : 'Inter, sans-serif',
      }
    },
  },
  plugins: [],
}
