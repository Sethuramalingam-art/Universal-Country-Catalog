import { terser } from "rollup-plugin-terser"; //used for minification and size reduce the size of module bundler in terms of kb's or byte's

const devMode = process.env.NODE_ENV === "development";
console.log(`${devMode ? "development" : "production"} mode bundle`);
export default [
  {
    input: "src/index.js",
    output: {
      file: "dist/index.js",
      format: "es", // format is ecmascript
      sourcemap: devMode ? "inline" : false,
      plugins: [
        terser({
          ecma: 2020,
          mangle: { toplevel: true },
          compress: {
            module: true,
            toplevel: true,
            unsafe_arrows: true,
            drop_console: !devMode,
            drop_debugger: !devMode,
          },
          output: { quote_style: 1 },
        }),
      ],
    },
  },
];
