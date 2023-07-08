/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors:{
        'color-1': '#B2BEBF',
        'color-2': '#889C9B',
        'color-3': '#486966',
        'color-4': '#4C5939',
        'color-5': '#3B3936',

        'bgColor-1': 'var(--backgroundColor1)',
        'bgColor-2': 'var(--backgroundColor2)',
        'bgColor-3': 'var(--backgroundColor3)',
        'textColor-1': 'var(--textColor1)',
      }
    },
  },
  plugins: [],
}