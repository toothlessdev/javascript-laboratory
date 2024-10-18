import babel from "@rollup/plugin-babel";
import typescript from "rollup-plugin-typescript2";
import commonjs from "@rollup/plugin-commonjs";

/** @type {import("rollup").RollupOptions[]} */
const options = [
    {
        input: "index.tsx",
        output: [
            {
                file: "dist/index.js",
                format: "cjs",
                sourcemap: true,
            },
        ],
        plugins: [
            typescript({ tsconfig: "tsconfig.json" }),
            commonjs(),
            babel({
                babelrc: true,
                babelHelpers: "bundled",
            }),
        ],
    },
];

export default options;
