/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    presets: [require("nativewind/preset")],
    theme: {
        colors: {
            primary: "447ad4",
            backgroundLight: "#ecedef",
            backgroundLighter: "#fafafa",
            backgroundDark: "#171717",
            backgroundDarker: "#171717",

            green: "34a854",
            red: "cb2f41",
        },
        textColor: {
          primaryLight: "#151515",
          primaryDark: "#f5f5f5",
        },
        extend: {},
    },
    future: {
        hoverOnlyWhenSupported: true,
    },
    plugins: [],
};
