'use strict';

const morgan = require('morgan');

function checkDecimalPlaces(n) {

  if (n < 10) n = `0${n}`;
  return n;
}

morgan.token('time', function() {

  var date = new Date();

  var hh = date.getHours();
  var mm = date.getMinutes();
  var ss = date.getSeconds();

  mm = checkDecimalPlaces(mm);
  ss = checkDecimalPlaces(ss);

  return `${hh}:${mm}:${ss}`;
});

module.exports = morgan('[:time] :method :status :response-time ms :url');
