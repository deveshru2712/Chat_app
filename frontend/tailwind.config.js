/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        darker: "0 10px 20px rgba(0, 0, 0, 0.1)", // A much darker shadow
      },
    },
  },
  plugins: [require("daisyui")],
};
