var express = require('express');
var app = express();
var port = process.env.port || 3000;

require("babel-core/register");

require('./server/config')(app, express);
app.listen(port, function () {
  console.log('Listening on ', port);
});


module.exports = app;
