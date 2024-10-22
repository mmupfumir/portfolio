import type { Config } from "tailwindcss";

const config: Config = {
  content: [
     "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "10px",
        lg: "250px",
      },
      screens: {
        sm: "400px",
        md: "768px",
        lg: "1200px",
      },
    },
    screens: {
      sm: "375px",
      md: "768px",
      lg: "1200px",
    },
    extend: {
      colors: {
      }
    },
  },
  plugins: [],
};
export default config;
