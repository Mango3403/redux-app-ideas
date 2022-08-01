/**
 * The default theme of this library depends on the @tailwindcss/forms plugin. 
 * To use it, follow the steps on the plugin source page. 
 * https://github.com/tailwindlabs/tailwindcss-forms
 */
module.exports = {
  mode: "jit",
  purge: [
    // ...
    "./node_modules/@vechaiui/**/*.{js,ts,jsx,tsx}", // path to vechaiui
  ],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@vechaiui/core"),
  ],
};