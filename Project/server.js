'use strict';

const app = require('./server/index')();

app.listen(3000, () => console.log('Listen on port 3000'));
