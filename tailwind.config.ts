import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      md: "1150px",
    },
    extend: {
      backgroundImage: {
        "primary-gradient":
          "linear-gradient(90deg, rgba(255,78,131,1) 0%, rgba(255,187,84,1) 100%)",
        "secondary-gradient":
          "linear-gradient(90deg, rgba(255,78,131,1) 0%, rgba(255,187,84,1) 100%)",
        "primary-light-gradient":
          "linear-gradient(90deg, rgba(255,78,131,0.5046393557422969) 0%, rgba(255,187,84,0.4962359943977591) 100%)",
      },
      colors: {
        // background: 'var(--background)',
        // foreground: 'var(--foreground)',
        primary_background: "#000",
        brand_gray: "#141414",
        orangish: "orange",
      },
    },
  },
  plugins: [],
};
export default config;
