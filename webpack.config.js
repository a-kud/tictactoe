var path = require("path");
var webpack = require("webpack");

var config = {
    context: path.join(__dirname, "src"),
    entry: [
        "./main.js",
        "webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000",
    ],
    output: {
        path: path.join(__dirname, "www"),
        filename: "bundle.js",
        publicPath: "/assets/",
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loaders: ["babel"],
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
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ]
};

module.exports = config;
