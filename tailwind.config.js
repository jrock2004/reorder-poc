module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      fontFamily: {
        body: ['Inter', 'ui-sans-serif', 'system-ui', 'Helvetica', 'serif'],
      },
      minWidth: {
        container: '500px',
      },
    },
  },
  plugins: [],
};
