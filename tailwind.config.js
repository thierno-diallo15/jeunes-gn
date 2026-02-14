/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [require("nativewind/preset")],
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#10B981", // Green
        secondary: "#F97316", // Orange
        neutral: "#64748B", // Gray
        background: "#F8FAFC", // Light Gray
        success: "#22C55E",
        alert: "#EF4444",
      },
    },
  },
  plugins: [],
}
