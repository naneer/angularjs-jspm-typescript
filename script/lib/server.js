#!/usr/bin/env node

'use strict';

var http = require('http');
var url = require('url');

var connect = require('connect');
var serveStatic = require('serve-static');
var send = require('send');
var argv = require('minimist')(process.argv.slice(2));

var options = {
  port: argv.p || argv.port,
  root: argv.r || argv.root,
  index: argv.index || 'index.html'
};

var server = connect()
  .use(function serveOverrideIndex(req, res, next) { // overrides index to what is set from the arguments --index=app.html
    if (options.index !== 'index.html' &&
        url.parse(req.url).pathname.match(/^(\/|\/index.html)$/)) {
      send(req, '/' + options.index, { root: options.root })
        .pipe(res);
    } else {
      next();
    }
  })
  .use(serveStatic(options.root));


http.createServer(server)
    .listen(options.port)
    .once('error', function(err){
        if (err.code === 'EADDRINUSE') {
            console.log('Port in use: %s', options.port);
        } else {
            console.error(err);
        }
    })
    .on('listening', function(){
        console.log('Started web server on http:/localhost:' + options.port);
    });