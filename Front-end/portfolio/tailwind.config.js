module.exports = {
    content: [
      './src/**/*.{js,jsx,ts,tsx}',
      './public/index.html',
    ],
    theme: {
      extend: {
        fontFamily: {
          sans: ['Inter', 'sans-serif'],  // Exemple de personnalisation des polices
        },
        colors: {
          primary: '#1a202c',  // Couleur personnalisée pour le thème principal
          secondary: '#2d3748',  // Couleur secondaire
        },
        animation: {
          fadeIn: 'fadeIn 2s ease-in-out',
        },
        keyframes: {
          fadeIn: {
            '0%': { opacity: 0 },
            '100%': { opacity: 1 },
          },
        },
      },
    },
    plugins: [],
  };
  