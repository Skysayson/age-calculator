/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./age-calculator/**/*.{html,js}"],
  theme: {
    fontFamily : {
      'Poppins' : ['Poppins Black'], 
    },
    borderRadius: {
      'lg' : '15rem',
      '2xl' : '2rem',
    },
    extend: {
      spacing: {
        '747':'47rem',
        '577' : '36rem',
        '40' : '40rem',
        '40.5' : '40.5rem',
        '42' : '42rem',
        '35' : '35rem',
        '30' : '30rem',
        '20' : '20rem',
        '15' : '15rem',
        '18' : '18rem',
        '5' : '5rem',
        '10' : '10rem',
        '20' : '20rem',
        '8' : '8rem',
        '2' : '2rem',
        '3' : '3rem',
        '4' : '4rem',
        '1' : '1rem',
        '0.5' : '0.5rem',
        '21' : '21rem',
        '13' : '13rem',
        '12' : '12rem',
        '12.5' : '12.5rem',
        '14' : '14rem',
        '14.2' : '14.2rem',
        '14.3' : '14.3rem',
        '14.4' : '14.4rem',
        '44' : '44rem',
        '37' : '37rem',
        '38' : '38rem',
        '50' : '50rem',
        '45' : '45rem',
        '7' : '7rem',
        '6' : '6rem',
        '6.5' : '6.5rem',
        '1.5' : '1.5rem',
        '1' : '1rem',
      },
      colors: {
        'Purple' : 'hsl(259, 100%, 65%)',
        'Sgrey' : 'hsl(0, 1%, 44%)',
      }
    },
  },
  plugins: [],
}

//npx tailwindcss -i ./src/input.css -o ./age-calculator/output.css --watch

