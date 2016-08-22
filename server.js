var webpack = require('webpack');
var webpackDevServer = require('webpack-dev-server');
var conf = require('./webpack.config');

var port = 9000;

// 自动刷新，在页面添加监听 [1]
conf.entry.unshift('webpack-dev-server/client?http://localhost:' + port);

// webpack热替换
conf.entry.unshift('webpack/hot/dev-server');
if (conf.plugins)
  conf.plugins.push(new webpack.HotModuleReplacementPlugin());
else
  conf.plugins = [new webpack.HotModuleReplacementPlugin()];

conf.output.publicPath = 'http://localhost:' + port + conf.output.publicPath;
new webpackDevServer(webpack(conf), {
  hot: true,
  publicPath: conf.output.publicPath // webpackDevServer 无法读取到publicPath，需要手动加
}).listen(port, () => {
  console.log('Webpack dev server run on port ' + port);
});

// [1]
// Inline mode with node.js API
// There is no inline: true flag in the webpack-dev-server configuration, because the webpack-dev-server module has no access to the webpack configuration. Instead the user must add the webpack-dev-server client entry point to the webpack configuration.
// http://webpack.github.io/docs/webpack-dev-server.html#inline-mode-with-node-js-api
