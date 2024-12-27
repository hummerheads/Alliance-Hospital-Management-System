const flowbite = require("flowbite-react/tailwind");
import daisyui from "daisyui"


/** @type {import('tailwindcss').Config} */
export const content = [
  "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",
  flowbite.content(),
];
export const theme = {
  extend: {},
};
export const plugins = [
  flowbite.plugin(),
  daisyui,

];
