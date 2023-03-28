const { join } = require("path");

/** @type {import('tailwindcss').Config} */
module.exports = {
    mode: "jit",
    purge: ['./app/**/*.{js,ts,jsx,tsx}', './Components/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {},
    },
    plugins: [],
};
