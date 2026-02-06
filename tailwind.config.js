/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        sq: {
          bg: "#241b4a",
          surface: "#30245f",
          muted: "#3b2b74",
          accent: "#f3c98b",
          accent2: "#f2a65a"
        }
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.25rem"
      },
      boxShadow: {
        soft: "0 10px 20px rgba(0,0,0,0.25)"
      }
    },
  },
  plugins: [],
}
