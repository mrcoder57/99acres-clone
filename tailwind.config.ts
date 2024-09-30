import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      bagde: {
        'custom-gradient': 'linear-gradient(to right, transparent 40%, rgb(186, 221, 201) 50%, transparent 60%)',
      },
    },
  },
  plugins: [],
};
export default config;
