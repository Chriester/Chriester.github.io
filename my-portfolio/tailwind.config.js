/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // Habilita el modo oscuro basado en clases
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      // Extiende las propiedades de transición
      transitionProperty: {
        'max-height': 'max-height',
        'width': 'width'
      },
      // Añade valores personalizados para backdrop blur
      backdropBlur: {
        md: '12px'
      },
      // Extiende la paleta de colores
      colors: {
        'blue': {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
        },
        dark: {
          DEFAULT: '#604652',
          light: '#735557',
          spacing: '#D29F80',
        },
        accent: '#D29F80',
        text: '#97866A',
      },
      // Configuración del contenedor
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
        },
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'), // Plugin opcional para estilos de formularios
  ],
}
