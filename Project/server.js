'use strict';

var app = require('./server/index');

app().listen(3000, () => console.log('Listen on port 3000'));
