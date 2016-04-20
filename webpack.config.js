var webpack = require('webpack');
var hotMiddlewareScript = 'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000&reload=true';
var path = require('path');

module.exports = {
  context: __dirname,
  entry: ['./client/index.js', hotMiddlewareScript],
  output: {
    path: path.join(__dirname, '/client/static'),
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
       loader: 'babel',
       include: [
         path.join(__dirname, 'client/')
       ],
       query: {
        presets: ['es2015', 'react']
      }
     }
   ]
 },
 resolve: {
    extensions: ['', '.js']
  }
};
