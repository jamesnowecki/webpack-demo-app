const path = require("path");
const common = require("./webpack.common.js");
const { merge } = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");


module.exports = merge(common, {
    entry: "./src/index.js",
    output: {
        filename: "[name].bundle.js",
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
            },
        ],
    },
    plugins: [new HtmlWebpackPlugin({
        template: "./src/template.html"
    })],
});