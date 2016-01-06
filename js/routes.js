/*
 * routes.js - module to provide routing
 * Danilo Zekovic
 */

// --- Local variables
'use strict';
var
  configRoutes;
// --- End variable declarations

// --- Public API

configRoutes = function ( router, server ) {

  // Serve files from html sibling directory
  var options = {
    root: __dirname + '/..'
    };

  router.get('/', function(req, res) {
    res.sendFile('index.html', options);
  });

};

module.exports = { configRoutes : configRoutes };
