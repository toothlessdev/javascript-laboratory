module.exports = {
    ...require("../../.prettierrc.cjs"),
    plugins: ["prettier-plugin-tailwindcss"],
    tailwindConfig: "./src/index.css",
};
