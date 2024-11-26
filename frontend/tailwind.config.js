/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        darker: "0 10px 20px rgba(245, 255, 255, 0.7)", // A much darker shadow
      },
    },
  },
  plugins: [require("daisyui")],
};
