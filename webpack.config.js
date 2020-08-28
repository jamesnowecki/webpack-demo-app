const path = require("path");

module.exports = {
    entry: "./src/index.js",
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "dist")
    },
    mode: "development",
    devtool: "none",
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    "style-loader", //3. inject styles into DOM
                    "css-loader", //2. CSS into valid commonjs
                    "sass-loader" //1. Turns sass into css
                ]
            }
        ]
    }
};