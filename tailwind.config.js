/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        customPink: "#FAECF1",
        customYellow: "#F5C887",
      },
    },
  },
  plugins: [],
};
