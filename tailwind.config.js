/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx}', // Si usas la nueva estructura app
    './src/pages/**/*.{js,ts,jsx,tsx}', // Para la estructura pages
    './src/components/**/*.{js,ts,jsx,tsx}', // Para componentes en src
    './components/**/*.{js,ts,jsx,tsx}', // Si tienes componentes fuera de src
    './pages/**/*.{js,ts,jsx,tsx}', // Si usas la estructura de carpetas antigua
  ],
  theme: {
    extend: {
      screens: {
        xs: '320px',
        sm: '375px',
        sml: '500px',
        md: '667px',
        mdl: '768px',
        lg: '960px',
        lgl: '1024px',
        xl: '1280px',
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
        indie_flower: ['Indie Flower'],
        poppins: ['Poppins'],
        dancing_script: ['Dancing Script'],
      },
    },
  },
  plugins: [],
}
