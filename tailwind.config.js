/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}", "./!(build|dist|.*)/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        gray: {
          "100": "#292b31",
          "200": "#2a2b2f",
          "300": "#24262c",
          "400": "#1c1d22",
          "500": "rgba(255, 255, 255, 0.02)",
          "600": "rgba(255, 255, 255, 0.12)",
          "700": "rgba(255, 255, 255, 0.1)",
          "800": "rgba(255, 255, 255, 0.06)",
          "900": "rgba(255, 255, 255, 0.04)",
          "1000": "rgba(255, 255, 255, 0.5)",
          "1100": "rgba(28, 29, 34, 0.06)",
          "1200": "rgba(28, 29, 34, 0.12)",
          "1300": "rgba(28, 29, 34, 0.08)",
          "1400": "rgba(28, 29, 34, 0.04)",
          "1500": "rgba(28, 29, 34, 0.5)",
        },
        sandybrown: {
          "100": "#ffa048",
          "200": "rgba(255, 160, 72, 0.1)",
        },
        salmon: {
          "100": "#ff7979",
          "200": "rgba(255, 121, 121, 0.1)",
        },
        lightslategray: {
          "100": "#888da7",
          "200": "rgba(136, 141, 167, 0.1)",
        },
        greenyellow: "#78d700",
        mediumslateblue: "#4b69ff",
        darkgray: "#989caa",
      },
      spacing: {},
      fontFamily: {
        "exo-2": "'Exo 2'",
        "baloo-2": "'Baloo 2'",
      },
      borderRadius: {
        lg: "18px",
        "3xl": "22px",
        lgi: "19px",
        mid: "17px",
      },
    },
    fontSize: {
      "11xl": "30px",
      base: "16px",
      sm: "14px",
      xl: "20px",
      xs: "12px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
