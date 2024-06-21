import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    letterSpacing: {
      normal: "0px",
      wide: "6px",
    },
    extend: {
      colors: {
        main: "#af5af2",
      },
      boxShadow: {
        sidebar: "0px 5px 8px 2px #D2CECE ",
        login: "4px 4px 10px 3px #1D5EEA",
      },
    },
  },
  plugins: [],
};
export default config;