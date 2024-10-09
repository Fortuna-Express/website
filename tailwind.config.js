module.exports = {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}', // Para buscar clases en archivos .vue, .js, .ts, etc.
  ],
  theme: {
    extend: {
      colors: {
        primary: '#b91c1c', // Color rojo para el botón primary
      },
    },
  },
  plugins: [],
};
