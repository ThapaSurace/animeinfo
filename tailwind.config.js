import { nextui } from "@nextui-org/react";

/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["var(--font-roboto)"],
        dancing: ["var(--font-dancing)"],
      },
      aspectRatio: {
        "4/3": "4 / 3",
      },
      backgroundImage: {
        'feature_img': "url('https://r4.wallpaperflare.com/wallpaper/716/192/899/one-piece-1920x1080-anime-one-piece-hd-art-wallpaper-0940782d715aadfb7677682f4051066d.jpg')",
      }
    },
  },
  corePlugins: {
    aspectRatio: false,
  },
  darkMode: "class",
  plugins: [nextui(), require("@tailwindcss/aspect-ratio")],
};

export default config;
