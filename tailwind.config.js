/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ocean: "#008470",
        darkerwhite: "rgba(0, 0, 0, 0.3)",
      },
    },
  },
  plugins: [],
};
