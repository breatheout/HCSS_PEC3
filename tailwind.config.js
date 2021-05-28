const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./src/**/*.html"],
  theme: {
    extend: {
      backgroundColor: (theme) => ({
        ...theme("colors"),
        nav: "rgba(0, 0, 0, 0.6)",
        navhov: "rgba(255, 255, 255, 0.2)",
        header: "rgba(0, 0, 0, 0.8)",
        white09: "rgba(255, 255, 255, 0.9)",
        blackopacity3: "rgba(0, 0, 0, 0.6)",
      }),
      backgroundImage: {
        "bw-pattern": "url('../images/background.png')",
        "merch-sample": "url('../images/pexels-cottonbro-4066293-RESIZE.jpg')",
      },
    },
    fontFamily: {
      sans: ["Arial", "Helvetica", "sans-serif"],
      header: ["Anton", "sans-serif"],
    },
    flex: {
      navresp: "1 1 50%",
    },
    flexGrow: {
      2: 2,
      3: 3,
    },
  },
  variants: {},
  plugins: [],
};
