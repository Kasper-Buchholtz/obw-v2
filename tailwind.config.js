/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      // screen sizes // https://tailwindcss.com/docs/breakpoints
      xs: '428px', // mobile      // 4 Column    // 16px margin    // 428px xs:
      sm: '768px', // tablet      // 8 Column    // 28px margin    // 768px sm:
      md: '1024px', // medium      // 10 Column   // 40px margin    // 1024px md:
      lg: '1280px', // desktop     // 12 Column   // 52px margin    // 1280px lg:
      xl: '1440px', // desktop     // 12 Column   // 72px margin    // 1440px xl:
      '2xl': '1920px', // desktop     // 24 Column   // 144px margin   // 1920px 2xl:
      '3xl': '2500px', // desktop     // 24 Column   // 206px margin   // 2500px 3xl:
    },
    fontSize: {
      // font sizes
      small: [
        'clamp(12px, calc(16px + 1.6667vw), 14px);',
        {
          // Info text // H6 // prev —— small
          lineHeight: '150%',
          letterSpacing: '0',
          fontWeight: '300',
        },
      ],
      regular: [
        'clamp(1em, 1.2em + 0.667em, 1.05em);',
        {
          // Paragraph
          lineHeight: '1.5',
          letterSpacing: '0',
          fontWeight: '400',
        },
      ],
      increased: [
        'clamp(1.1em, calc(1.1em + 1.6667vw), 1.2em);',
        {
          // H5 // prev —— increased
          lineHeight: '1.5',
          letterSpacing: '0',
          fontWeight: '700',
        },
      ],
      medium: [
        'clamp(1.25em, calc(1.25em + 2.7778vw), 1.5em);',
        {
          // H4 // prev —— medium
          lineHeight: '1.5',
          letterSpacing: '0',
          fontWeight: '700',
        },
      ],
      large: [
        'clamp(1.563em, calc(1.563em + 3.125vw), 2.25em);',
        {
          // H3 // prev —— large
          lineHeight: 'clamp(120%, calc(120% + 0.2vw), 120%)',
          letterSpacing: '0',
          fontWeight: '700',
        },
      ],
      huge: [
        'clamp(1.953em, calc(1.953em + 2.6667vw), 3.375em);',
        {
          // H2 // prev —— huge
          lineHeight: '1',
          letterSpacing: '0',
          fontWeight: '700',
        },
      ],
      giant: [
        'clamp(7.141em, calc(2.441em + 2.1111vw), 5.063em);',
        {
          // H1 // prev —— giant
          lineHeight: '1',
          letterSpacing: '0',
          fontWeight: '700',
        },
      ],
    },


    extend: {
      fontFamily: {
        // font families
        sans: ['var(--font-sans)'],  // Correct the variable reference
        serif: ['var(--font-serif)'],  // Use the correct font from layout.tsx
      },
      colors: {
        superego: {
          green: '#3BE086',
          purple: '#7B61FF',
          lavendar: '#C9A9EA',
          flamingo: '#EABEEE',
          grey: '#5F727F',
          light: {
            base: '#FCFCFC',
            light: '#EFF1F2',
            0: '#FFFFFF',
            50: '#F0F0F0',
            100: '#E0E0E0',
            200: '#C2C2C2',
            300: '#A3A3A3',
            400: '#858585',
          },
          dark: '#242B31',
          black: '#3D3D3D',
        },

        lights: {
          0: '#FFFFFF',
          400: '#858585',
        },
        darks: {
          700: '#333333',
          900: '#0A0A0A'
        },
      },
      gridTemplateColumns: {
        // 24-column grid
        24: 'repeat(24, minmax(0, 1fr))', // 24-column grid
        12: 'repeat(12, minmax(0, 1fr))', // 12-column grid
        8: 'repeat(8, minmax(0, 1fr))', // 8-column grid
        4: 'repeat(4, minmax(0, 1fr))', // 4-column grid
        3: 'repeat(3, minmax(0, 1fr))', // 3-column grid
        2: 'repeat(2, minmax(0, 1fr))', // 2-column grid
        '3-small': 'repeat(3, minmax(0, 0.1fr))', // 4-column grid
      },
      spacing: {
        // spacing
        4.5: '1.125rem', // 1.125rem =
        5.5: '1.125rem',
        11.5: '2.875rem',
        13: '3.125rem',
        13.5: '3.25rem',
        19: '4.5rem',
        // Viewport Height
        'vh-75': '75vh',
        'vh-100': '100vh',
        'vh-90': '90vh',
        'vh-80': '80vh',
        'vh-85': '85vh',
      },
      gridColumnEnd: {
        1: '1',
        2: '2',
        3: '3',
        4: '4',
        5: '5',
        6: '6',
        7: '7',
        8: '8',
        9: '9',
        10: '10',
        11: '11',
        12: '12',
        13: '13',
        14: '14',
        15: '15',
        16: '16',
        17: '17',
        18: '18',
        19: '19',
        20: '20',
        21: '21',
        22: '22',
        23: '23',
        24: '24',
        // NEGETIVE
        '-1': '-1',
        '-2': '-2',
        '-3': '-3',
        '-4': '-4',
        '-5': '-5',
        '-6': '-6',
        '-7': '-7',
        '-8': '-8',
        '-9': '-9',
        '-10': '-10',
        '-11': '-11',
        '-12': '-12',
        '-13': '-13',
        '-14': '-14',
        '-14': '-14',
        '-15': '-15',
        '-16': '-16',
        '-17': '-17',
        '-18': '-18',
        '-19': '-19',
        '-20': '-20',
        '-21': '-21',
        '-22': '-22',
        '-23': '-23',
        '-24': '-24',
      },
      gridColumnStart: {
        1: '1',
        2: '2',
        3: '3',
        4: '4',
        5: '5',
        6: '6',
        7: '7',
        8: '8',
        9: '9',
        10: '10',
        11: '11',
        12: '12',
        13: '13',
        14: '14',
        15: '15',
        16: '16',
        17: '17',
        18: '18',
        19: '19',
        20: '20',
        21: '21',
        22: '22',
        23: '23',
        24: '24',
        // NEGETIVE
        '-1': '-1',
        '-2': '-2',
        '-3': '-3',
        '-4': '-4',
        '-5': '-5',
        '-6': '-6',
        '-7': '-7',
        '-8': '-8',
        '-9': '-9',
        '-10': '-10',
        '-11': '-11',
        '-12': '-12',
        '-13': '-13',
        '-14': '-14',
        '-14': '-14',
        '-15': '-15',
        '-16': '-16',
        '-17': '-17',
        '-18': '-18',
        '-19': '-19',
        '-20': '-20',
        '-21': '-21',
        '-22': '-22',
        '-23': '-23',
        '-24': '-24',
      },
      gridColumn: {
        'span-24': 'span 24 / span 24',
        'span-23': 'span 23 / span 23',
        'span-22': 'span 22 / span 22',
        'span-21': 'span 21 / span 21',
        'span-20': 'span 20 / span 20',
        'span-19': 'span 19 / span 19',
        'span-18': 'span 18 / span 18',
        'span-17': 'span 17 / span 17',
        'span-16': 'span 16 / span 16',
        'span-15': 'span 15 / span 15',
        'span-14': 'span 14 / span 14',
        'span-13': 'span 13 / span 13',
      },
      height: (theme) => ({
        'screen/1.1': 'calc(100vh / 1.1)',
        'screen/1.2': 'calc(100vh / 1.2)',
        'screen/1.5': 'calc(100vh / 1.5)',
        'screen/1.6': 'calc(100vh / 1.6)',
        'screen/2': 'calc(100vh / 2)',
        'screen/2.5': 'calc(100vh / 2.5)',
        'screen/3': 'calc(100vh / 3)',
        'screen/4': 'calc(100vh / 4)',
        'screen/5': 'calc(100vh / 5)',
        'screen/6': 'calc(100vh / 6)',
      }),
      minHeight: (theme) => ({
        'screen/1.1': 'calc(100vh / 1.1)',
        'screen/1.2': 'calc(100vh / 1.2)',
        'screen/1.5': 'calc(100vh / 1.5)',
        'screen/1.6': 'calc(100vh / 1.6)',
        'screen/2': 'calc(100vh / 2)',
        'screen/2.5': 'calc(100vh / 2.5)',
        'screen/3': 'calc(100vh / 3)',
        'screen/4': 'calc(100vh / 4)',
        'screen/5': 'calc(100vh / 5)',
        'screen/6': 'calc(100vh / 6)',
      }),
      maxHeight: theme => ({
        "screen/1.1": "calc(100vh / 1.1)",
        "screen/1.2": "calc(100vh / 1.2)",
        "screen/1.5": "calc(100vh / 1.5)",
        "screen/1.6": "calc(100vh / 1.6)",
        "screen/2": "calc(100vh / 2)",
        "screen/2.5": "calc(100vh / 2.5)",
        "screen/3": "calc(100vh / 3)",
        "screen/4": "calc(100vh / 4)",
        "screen/5": "calc(100vh / 5)",
        "screen/6": "calc(100vh / 6)",
      }),
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/container-queries'),
    require('tailwindcss-debug-screens'),
    function ({ addVariant }) {
      addVariant('not-first-child', '&:not(:first-child)');
    },
  ],
}
