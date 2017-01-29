var path = require("path");
var webpack = require("webpack");
var HtmlWebpackPlugin = require("html-webpack-plugin");

var config = {
    context: path.join(__dirname, "src"),
    entry: [
        "./main.js",
    ],
    output: {
        path: path.join(__dirname, "www"),
        filename: "bundle.js",
        publicPath: "/www/",
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loaders: ["babel"],
            },
            {
                test: /\.css$/,
                loaders: ["style-loader", "css-loader", "sass-loader"],
            },
        ],
    },
    resolveLoader: {
        root: [
            path.join(__dirname, "node_modules"),
        ],
    },
    resolve: {
        root: [
            path.join(__dirname, "node_modules"),
        ],
    },
    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.NoErrorsPlugin(),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('production')
          }
        }),
        new webpack.optimize.UglifyJsPlugin(),
        new HtmlWebpackPlugin(),
    ]
};

module.exports = config;
