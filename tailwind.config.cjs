/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      colors: {
        title: "#212121",
        content: "#25262D",
        body: "#F5F5F5",
        violet: "#7840B0",
        "custom-gray-100": "#E8E8E8",
        "custom-gray-200": "rgba(37, 38, 45, 0.25)",
        "custom-gray-300": "#F4F4F4",
        "custom-gray-400": "#929396",
        "custom-green-100": "#D7EBD3",
        "custom-green-200": "#5BC044",
        "custom-red-100": "#FFD8D8",
        "custom-red-200": "#EE5B5B",
        "custom-blue-100": "#DFE4FE",
        "custom-blue-200": "#5E77F9",
      },
      borderWidth: {
        1: "1px",
      },
    },
    fontFamily: {
      serif: ["Roboto", "sans-serif", "sans-serif"],
    },
    container: {
      padding: "2rem",
    },
  },
  plugins: [],
};
