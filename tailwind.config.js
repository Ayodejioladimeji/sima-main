/** @type {import('tailwindcss').Config} */
<<<<<<< HEAD
// tailwind.config.js
=======
>>>>>>> f31f635 (Mobile new features)
module.exports = {
  content: [
    './App.{js,jsx,ts,tsx}',
    './src/**/*.{js,jsx,ts,tsx}',
<<<<<<< HEAD
    './src/components/Auth/**/*.{js,jsx,ts,tsx}',
=======
    './src/components/**/*.{js,jsx,ts,tsx}',
>>>>>>> f31f635 (Mobile new features)
  ],
  theme: {
    extend: {
      colors: {
        customRed: '#FE0002',
        customChoc: '#56403E',
        customBg: '#F8F3EC',
<<<<<<< HEAD
      },
      fontFamily: {
        avenir: ['Avenir', 'sans-serif'],
        openSans: ['OpenSans-Regular', 'sans-serif'],
=======
        'custom-black': {
          50: '#F2F2F2',
          100: '#E6E6E6',
          200: '#BFBFBF',
          300: '#999999',
          400: '#4D4D4D',
          500: '#000000',
          600: '#000000',
          700: '#000000',
          800: '#000000',
          900: '#000000',
          950: '#000000',
        },
        'custom-black-russian': {
          50: '#EBF0F5',
          100: '#D5DEE8',
          200: '#9FAFC7',
          300: '#7182A6',
          400: '#2D3763',
          500: '#070821',
          600: '#06071F',
          700: '#04051A',
          800: '#030314',
          900: '#01020F',
          950: '#01010A',
        },
        'custom-red': {
          50: '#FFF8F2',
          100: '#FFF1E6',
          200: '#FFD8BF',
          300: '#FFB899',
          400: '#FF674D',
          500: '#FE0000',
          600: '#E60000',
          700: '#BF0000',
          800: '#990000',
          900: '#730000',
          950: '#4A0000',
        },
      },
      fontFamily: {
        Avenir: ['Avenir', 'sans-serif'],
        OpenSans: ['OpenSans-Regular', 'sans-serif'],
        InterThin: ['Inter-Thin', 'sans-serif'],
        InterLight: ['Inter-Light', 'sans-serif'],
        InterExtraLight: ['Inter-ExtraLight', 'sans-serif'],
        InterRegular: ['Inter-Regular', 'sans-serif'],
        InterMedium: ['Inter-Medium', 'sans-serif'],
        InterBold: ['Inter-Bold', 'sans-serif'],
        InterSemiBold: ['Inter-SemiBold', 'sans-serif'],
        InterExtraBold: ['Inter-ExtraBold', 'sans-serif'],
>>>>>>> f31f635 (Mobile new features)
      },
    },
  },
  plugins: [],
};
