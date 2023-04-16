/** @type {import('tailwindcss').Config} */
/* npx tailwindcss -i ./src/input.css -o ./dist/output.css --watch */
module.exports = {
  content: ["./**.{html,js}"],
  theme: {
    screen: {
      sm:   '480px',
      // => @media (min-width: 640px and max-width: 767px) { ... }

      md:  '768px',
      // => @media (min-width: 768px and max-width: 1023px) { ... }

      lg:  '1024px',
      // => @media (min-width: 1024px and max-width: 1279px) { ... }

      xl:  '1280px',
      // => @media (min-width: 1280px and max-width: 1535px) { ... }

      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      fontFamily:{
        poppins: ['Poppins', 'sans-seif'],
      },
    },
  },
  plugins: [],
}

