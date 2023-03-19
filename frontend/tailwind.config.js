const { default: plugin } = require("tailwindcss");
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        cs1: "300px",
        cs2: "350px",
        cs3: "400px",
        cs4: "450px",
        cs5: "500px",
        cs6: "550px",
        cs7: "600px",
        cs8: "650px",
      },
      backgroundImage: {
        blue_purple: "linear-gradient(90deg,#4ca5ff 2.34%,#b673f8 100.78%)",
        orange_red: "linear-gradient(90deg,#ff7170 2.34%,#ffe57f 100.78%)",
        green_lime: "linear-gradient(243deg, #3dd875 23%, #0eb3a0 87%)",
      },
      colors: {
        mine_gray: "#171e26",
        mine_pink: "#e10098",
      },
      fontFamily: {
        barlow: ["Barlow", "sans-serif"],
        inter: ["Inter", "sans-serif"],
        nunito: ["Nunito", "sans-serif"],
        playfair: ["Playfair Display", "serif"],
        ptsherif: ["PT Serif", "serif"],
        roboto: ["Roboto", "sans-serif"],
        urbanist: ["Urbanist", "sans-serif"],
        dancing: ["Dancing Script", "cursive"],
        pop: ["Poppins", "sans-serif"],
        open_sans: ["Open Sans", "sans-serif"],
        archivo: ["Archivo Black", "sans-serif"],
        bree: ["Bree Serif", "serif"],
        cour: ["Courgette", "cursive"],
        gideon: ["Gideon Roman", "cursive"],
        great: ["Great Vibes", "cursive"],
        kanit: ["Kanit", "sans-serif"],
        lobster: ["Lobster", "cursive"],
        lora: ["Lora", "serif"],
        pacifico: ["Pacifico", "cursive"],
        paytone: ["Paytone One", "sans-serif"],
        russo: ["Russo One", "sans-serif"],
        sourserif: ["Source Serif Pro", "serif"],
        josephine: ["Josefin Sans", "sans-serif"],
      },
    },
  },
  plugins: [
    require("tailwind-scrollbar-hide"),
    require("tailwind-scrollbar"),
    require("flowbite/plugin"),
  ],
  variants: {
    scrollbar: ["rounded"],
  },
};
