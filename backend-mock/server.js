var jsonApi = require('jsonapi-server');
var fs = require('fs');
var path = require('path');

jsonApi.setConfig({
  protocol: 'http',
  hostname: 'localhost',
  port: 16006
});

// Load all the resources
fs.readdirSync(path.join(__dirname, '/resources'))
  .filter(function(filename) {
    return /^[a-z].*\.js$/.test(filename);
  })
  .map(function(filename) {
    return path.join(__dirname, '/resources/', filename);
  })
  .forEach(require);

jsonApi.start();
