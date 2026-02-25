/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#fff1f5",
          100: "#ffe4ec",
          200: "#fecddc",
          300: "#fda4c2",
          400: "#fb6ea8",
          500: "#f43f86",
          600: "#e11d74",
          700: "#be185d",
          800: "#9d174d",
          900: "#831843",
        },
      },
      keyframes: {
        // ✅ reveal multi-línea (para títulos grandes sin recortes)
        reveal: {
          "0%": { clipPath: "inset(0 100% 0 0)" },
          "100%": { clipPath: "inset(0 0 0 0)" },
        },
        // ✅ cursor parpadeante
        blink: {
          "50%": { borderColor: "transparent" },
          "100%": { borderColor: "currentColor" },
        },
      },
      animation: {
        reveal: "reveal 4s ease-out 1 forwards",
        cursor: "blink 2s infinite",
      },
    },
  },
  plugins: [],
};