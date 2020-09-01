const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: "./src/index.js",
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
    },
    plugins: [new HtmlWebpackPlugin({
        template: "./src/template.html"
    })],
};