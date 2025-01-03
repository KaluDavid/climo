/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      white: "#FFFFFF",
      grayishLavender: "#EBEBF599",
    },
    fontFamily: {
      sans: ["SF Pro Display"],
    },
    extend: {},
  },
  plugins: [],
};
