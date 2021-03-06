module.exports = {
  darkMode: false, // or 'media' or 'class'
  mode: 'jit',
  purge: {
    content: [
      'components/**/*.vue',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'plugins/**/*.js',
      'nuxt.config.js',
      // TypeScript
      'plugins/**/*.ts',
      'nuxt.config.ts',
    ],
  },
  theme: {
    truncate: {
      lines: {
        2: '2',
        3: '3',
      },
    },
    maxHeight: {
      0: '0',
      '1/10': '10%',
      '3/20': '15%',
      '1/5': '20%',
      '1/4': '25%',
      '3/10': '30%',
      '1/3': '33.33333%',
      '2/5': '40%',
      '1/2': '50%',
      '3/5': '60%',
      '7/10': '70%',
      '3/4': '75%',
      '4/5': '80%',
      '9/10': '90%',
      full: '100%',
    },
    maxWidth: {
      0: '0',
      '1/10': '10%',
      '3/20': '15%',
      '1/5': '20%',
      '3/10': '30%',
      '1/4': '25%',
      '1/3': '33.33333%',
      '2/5': '40%',
      '9/20': '45%',
      '1/2': '50%',
      '3/5': '60%',
      '7/10': '70%',
      '3/4': '75%',
      '4/5': '80%',
      '9/10': '90%',
      full: '100%',
      '15vw': '15vw',
      '20vw': '20vw',
      '24vw': '24vw',
      '30vw': '30vw',
      '35vw': '35vw',
      '40vw': '40vw',
      '45vw': '45vw',
      '50vw': '50vw',
      '60vw': '60vw',
      '80vw': '80vw',
      '100vw': '100vw',
    },
    extend: {
      screens: {
        '3xl': '2560px',
      },
      boxShadow: {
        'home-card': '0px 0px 80px 9px #000000',
      },

      spacing: {
        100: '28rem',
        272: '272px',
        486: '486px',
        347: '347px',
      },

      scale: {
        80: '.8',
        70: '.7',
        60: '.6',
        40: '.4',
        250: '2.5',
        350: '3.5',
      },

      borderRadius: {
        '4xl': '2rem',
      },

      lineHeight: {
        65: '65px',
        32: '32px',
        50: '50px',
      },

      fontSize: {
        56: '56px',
        41: '41px',
        42: '42px',
      },

      colors: {
        //  header
        'h-black': '#040912',
        'h-red': '#FD0404',
        'h-gray': '#555C6B',
        'h-font': '#D2D6DC',

        // background
        'b-gray': '#DADBE0',
        'b-gray-form': '#F8F7F9',
        'b-black': '#03020B',
        'b-dark-gray': '#0A111E',

        // linear gradient
        'l-blue': '#74FFCA',
        'l-darkblue': '#4FAFFF',
        'l-red': '#FF0000',
        'l-darkred': '#E52D27',

        //
        'x-blue': '#9BEFE7',
        'x-gray': '#666',
        'x-grayText': 'rgba(4,2,38,60%)',
        'x-red': '#FE0202',
        'x-black': '#0D1D39',
        'x-gray-partner': '#777B87',
        'work-contact': '#F51210',
      },
    },
    fontFamily: {
      arial: 'arial',
      'arial-black': 'arial-black',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/line-clamp'),
  ],
}
