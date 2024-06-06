import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        darkGeneral: "#0d0d0d",
        accentColor: "#29cc8d"
      },
      fontFamily: {
        delusion: ['var(--font-delusion)'],
      },
    },
  },
  plugins: [],
};
export default config;
