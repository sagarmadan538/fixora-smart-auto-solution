/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#658821",
        secondary: "#e53935",
        accent: "#2563eb",
      },
    },
  },
  plugins: [],
}
