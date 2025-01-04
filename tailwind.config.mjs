/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        themeBlack: "#3C4242",
        themeGray: "#807D7E",
        themeMidGray: "#dbd7d8",
        themeSubGray: "#F6F6F6",
        themeMain: "#8A33FD",
      },
    },
  },
  plugins: [],
};
