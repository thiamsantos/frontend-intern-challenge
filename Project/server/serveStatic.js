'use strict';

const url    = require('url')
    , fs     = require('fs')
    , render = require('./render')
    , path   = require('path');

function serveStatic(dir, req, res) {

  const uri           = url.parse(req.url).pathname
      , completePath  = path.join(dir, unescape(uri))
      , filename      = uri.split(/[\/\\]/).reverse()[0]
      , filepath      = completePath.split(/[\/\\]/).slice(0,-1).join('/');

  let stats;

  try {
    stats = fs.lstatSync(filepath + '/' + filename);

  } catch(e) {
    res.writeHead(404, {'Content-Type': 'text/plain' });
    res.end('404 Not Found\n');
    return;
  }

  if (stats.isFile()) {
    render(req, res, filename, filepath);

  } else if (stats.isDirectory()) {
    render(req, res, 'index.html', completePath);

  } else {
    res.writeHead(500, {'Content-Type': 'text/plain'});
    res.end('500 Internal server error\n');
  }
}

module.exports = serveStatic;
