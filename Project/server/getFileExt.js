'use strict';

function getFileExt(filename) {

	return filename.split('.').reverse()[0];
}

module.exports = getFileExt;
