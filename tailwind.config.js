module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Segoe UI', 'sans-serif', 'system-ui'],
      },
      colors: {
        'bg-light': '#F7EBD4',
        'bg-dark': '#141B1F',
        'font-light': '#808080',
        'font-dark': '#F5F5F5',
        'hero-font': '#292929',
        DarkGreen: '#026440',
      },
      fontSize: {
        xl: ['20px', '48px'],
      },
    },
  },
  plugins: [],
};
