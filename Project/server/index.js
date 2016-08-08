'use strict';

const http   = require('http')
    , logger = require('./logger')
    , router = require('./router');


function app() {
  return http.createServer((req, res) =>
    logger(req, res, () => router(req, res)));
};

module.exports = app;
