/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: {
          DEFAULT: "#000000", // Negro base
          light: "#1A1A1A", // Fondos secundarios
          softer: "#2D2D2D", // Bordes / secciones
          muted: "#4D4D4D", // Texto secundario
          text: "#E5E5E5", // Texto principal sobre negro
        },
        accent: {
          blue: "#3B82F6", // Azul eléctrico
          purple: "#8B5CF6", // Morado neón
          green: "#22C55E", // Verde lima
          red: "#EF4444", // Rojo coral
          yellow: "#FACC15", // Amarillo dorado
        },
      },
    },
  },
  plugins: [],
};

