/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#000000",
        secondary: "#fdfdfd",
        lightBlue: "#1e90ff",
        gray: "#383838",
      },

      fontSize: {
        huge: 'clamp(2rem, 6vw, 3rem)',
        medium: 'clamp(2rem, 6vw, 2.5rem)',
        small: 'clamp(1rem, 6vw, 1rem)',
      },

      fontFamily: {
        montserrat : ['Montserrat', 'sans-serif'],
        monument : ['Monubold'],
        monureg : ['Monureg']

        

      }
    },

    container: {
      center: true,
      padding: '1rem',
      screens: {
        sm: '400px',
        md: '720px',
        lg: '984px',
        xl: '1248px',
        '2xl' : '1496px',
      },
    }
  },
  plugins: [],
}
