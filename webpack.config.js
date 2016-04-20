var webpack = require('webpack');
var hotMiddlewareScript = 'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000&reload=true';
var path = require('path');

module.exports = {
  context: __dirname,
  entry: ['./client/index', hotMiddlewareScript],
  output: {
    path: __dirname,
    publicPath: 'client/static/',
    filename: 'bundle.js'
  },
  devtool: '#source-map',
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  module: {
   loaders: [
     {
       test: /\.js?/,
       exclude: [/node_modules/, /styles/],
       loaders: ['babel'],
       include: path.join(__dirname, 'src')
     }
   ]
 }
};
