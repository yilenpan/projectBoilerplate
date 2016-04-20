var path = require('path');

module.exports = function (app, express) {

  // Webpack hot reload
  if (process.env.NODE_ENV !== 'PRODUCTION') {
    var webpack = require('webpack');
    var webpackConfig = require('../../webpack.config');
    var compiler = webpack(webpackConfig);

    app.use(require("webpack-dev-middleware")(compiler, {
      noInfo: true, publicPath: webpackConfig.output.publicPath
    }));

    app.use(require("webpack-hot-middleware")(compiler, {
      log: console.log, path: '/__webpack_hmr', heartbeat: 10 * 1000
    }));
  }

  // serve assets
  app.use('/bundle.js', express.static(path.join(__dirname, '../../client/static/bundle.js')));
  app.use('/styles', express.static(path.join(__dirname, '../../client/static/styles')));

  // Setting up routes
  var staticPages = express.Router();
  app.use('/', staticPages);
  require('../routes/staticPages')(staticPages);


};
