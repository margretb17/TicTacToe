const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

var DIST_DIR = path.resolve(__dirname, "dist");
var SRC_DIR = path.resolve(__dirname, "src/client");

var config = {
    entry : SRC_DIR + "/main.js",
    output: {
        path: DIST_DIR,
        filename: "main.min.js"
    },
    plugins:[
        new HtmlWebpackPlugin({
            template: SRC_DIR + "/index.html"
        })
    ],
    devServer: {
        port: 5000,
        open: true,
        proxy: {
            "/api": "http://localhost:3000"
        }
    }
};

module.exports = config;