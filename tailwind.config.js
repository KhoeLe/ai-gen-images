const { join } = require("path");

/** @type {import('tailwindcss').Config} */
module.exports = {
    mode: "jit",
    content: [
        // "./app/**/*.{js,ts,jsx,tsx}", // Note the addition of the `app` directory.
        // "./pages/**/*.{js,ts,jsx,tsx}",
        // "./components/**/*.{js,ts,jsx,tsx}",
        join(__dirname, "/app/**/*.{js,ts,jsx,tsx}"),
        join(__dirname, "/components/**/*.{js,ts,jsx,tsx}"),
        join(__dirname, "/pages/**/*.{js,ts,jsx,tsx}"),
    ],
    purge: [
        join(__dirname, "/app/**/*.{js,ts,jsx,tsx}"),
        join(__dirname, "/components/**/*.{js,ts,jsx,tsx}"),
        join(__dirname, "/pages/**/*.{js,ts,jsx,tsx}"),
    ],
    theme: {
        extend: {},
    },
    plugins: [],
};
