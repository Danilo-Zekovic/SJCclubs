/*
 * app.js
 * Danilo Zekovic
 * express server
 */

'use strict';
//
var
  http = require('http'),
  express = require('express'),
  socketIo = require('socket.io'),
  bodyParser = require('body-parser'),
  methodOverride = require('method-override'),
  morgan = require('morgan'),
  fsHandle = require('fs'),

  app = express(),
  router = express.Router(),
  routes = requier('./js/routes.js'),
  server = http.createServer( app ),
  io     = socketIo.listen( server ),
  watchMap = {}; // I may use this one later




// --- Start service
server.listen(4000);
console.log(
  'Express server listening on port %d in %s mode',
  server.address().port, app.settings.env
);
