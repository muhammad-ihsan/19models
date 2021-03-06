'use strict';

require('dotenv').config()

var loopback = require('loopback');
var boot = require('loopback-boot');

var app = module.exports = loopback();

if (process.env.NODE_ENV === 'prod') {
  app.set('BASE_DOMAIN', process.env.PROD_BASE_DOMAIN)
} else {
  app.set('BASE_DOMAIN', process.env.DEV_BASE_DOMAIN)
}

app.set('PORT', process.env.PORT)

app.start = function() {
  // start the web server
  return app.listen(function() {
    app.emit('started');
    var baseUrl = app.get('url').replace(/\/$/, '');
    console.log('Web server listening at: %s', baseUrl);
    if (app.get('loopback-component-explorer')) {
      var explorerPath = app.get('loopback-component-explorer').mountPath;
      console.log('Browse your REST API at %s%s', baseUrl, explorerPath);
    }
  });
};

// Bootstrap the application, configure models, datasources and middleware.
// Sub-apps like REST API are mounted via boot scripts.
boot(app, __dirname, function(err) {
  if (err) throw err;

  // start the server if `$ node server.js`
  if (require.main === module)
    app.start();
});
