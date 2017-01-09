var express = require('express');
var webpackDevMiddleware = require('webpack-dev-middleware');
var webpack = require('webpack');
var webpackConfig = require('./webpack.config.js');
var app = express();
var compiler = webpack(webpackConfig);
var webpackHotMiddleware = require("webpack-hot-middleware");

app.use(express.static(__dirname + "/www"));

app.set('views', __dirname + '/src/views');
app.set('view engine', 'pug');

app.get('/', function (req, res) {
  res.render('index');
})

app.use(webpackDevMiddleware(compiler, {
    hot: true,
    filename: "bundle.js",
    publicPath: "/assets/",
    stats: {
        colors: true,
    },
    historyApiFallback: true,
}));

app.use(webpackHotMiddleware(compiler, {
    log: console.log,
    path: "/__webpack_hmr",
    heartbeat: 10 * 1000,
}));

var server = app.listen(3000, function(){
    var host = server.address().address;
    var port = server.address().port;
    console.log('Example app listening at http://%s:%s', host, port);
});
