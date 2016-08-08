'use strict';

const render      = require('./render')
    , serveStatic = require('./serveStatic');

function router(req, res) {
  if (req.method === 'GET') {
    switch(req.url) {
      case '/':
        render(req, res, 'index.html');
        break;
      case '/urls':
        render(req, res, 'urls.json')
        break;
      default:
        serveStatic('dist', req, res);
    }
  }
}

module.exports = router;
