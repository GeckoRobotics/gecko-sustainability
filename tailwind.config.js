/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        alert: {
          100: "rgba(255,220,195,1)",
          200: "rgba(255,183,131,1)",
          300: "rgba(255,143,63,1)",
          500: "rgba(181,76,0,1)",
          600: "rgba(136,57,0,1)",
          "400_base": "rgba(255,111,7,1)",
        },
        warning: {
          200: "rgba(255,237,155,1)",
          300: "rgba(255,214,91,1)",
          500: "rgba(183,129,3,1)",
          600: "rgba(140,98,0,1)",
          "400_base": "rgba(255,193,7,1)",
        },
        success: {
          200: "rgba(193,247,183,1)",
          300: "rgba(128,204,137,1)",
          500: "rgba(20,106,54,1)",
          600: "rgba(13,65,33,1)",
          "400_base": "rgba(64,183,78,1)",
        },
        error: {
          200: "rgba(255,219,208,1)",
          300: "rgba(255,175,157,1)",
          500: "rgba(175,27,41,1)",
          600: "rgba(149,4,17,1)",
          "400_base": "rgba(220,26,12,1)",
        },
        blue: {
          200: "rgba(207,242,255,1)",
          300: "rgba(159,225,255,1)",
          400: "rgba(15,143,255,1)",
          600: "rgba(4,58,147,1)",
          700: "rgba(1,45,117,1)",
          800: "rgba(0,29,77,1)",
          "500_base": "rgba(10,111,219,1)",
        },
        purple: {
          200: "rgba(227,223,251,1)",
          300: "rgba(164,156,231,1)",
          400: "rgba(132,123,208,1)",
          600: "rgba(47,40,127,1)",
          700: "rgba(30,25,102,1)",
          800: "rgba(19,15,84,1)",
          "500_base": "rgba(90,81,177,1)",
        },
        crimson: {
          200: "rgba(255,164,180,1)",
          300: "rgba(255,100,128,1)",
          400: "rgba(229,61,102,1)",
          600: "rgba(167,0,43,1)",
          700: "rgba(132,0,34,1)",
          800: "rgba(101,0,26,1)",
          "500_base": "rgba(194,0,50,1)",
        },
        slate: {
          200: "rgba(241,245,246,1)",
          300: "rgba(209,222,227,1)",
          400: "rgba(162,186,195,1)",
          500: "rgba(127,148,156,1)",
          600: "rgba(81,100,108,1)",
          800: "rgba(19,48,64,1)",
          900: "rgba(11,33,45,1)",
          "700_base": "rgba(40,61,77,1)",
        },
        gray: {
          300: "rgba(245,245,245,1)",
          400: "rgba(238,238,238,1)",
          600: "rgba(158,158,158,1)",
          700: "rgba(114,114,114,1)",
          800: "rgba(63,63,63,1)",
          "500_base": "rgba(224,224,224,1)",
          "200_white": "rgba(255,255,255,1)",
        },
        gecko_brand: {
          100: "rgba(236,255,244,1)",
          200: "rgba(200,251,221,1)",
          300: "rgba(86,231,179,1)",
          400: "rgba(0,194,144,1)",
          500: "rgba(0,134,119,1)",
          700: "rgba(19,48,64,1)",
          800: "rgba(11,33,45,1)",
          "600_base": "rgba(0,105,103,1)",
          existing: "rgba(96,158,47,1)",
        },
        nest: {
          blue: "rgba(241,243,255,1)",
          neutral: "rgba(236,239,241,1)",
          red: "rgba(249,72,60,1)",
          green: "rgba(231,245,233,1)",
          yellow: "rgba(162,111,59,1)",
        },
      },
      fontFamily: {
        tech: ['"Share Tech Mono"'],
        poppins: ["Poppins"],
        manrope: ["Manrope"],
      },
    },
  },
  plugins: [],
};
