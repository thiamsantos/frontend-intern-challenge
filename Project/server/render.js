'use strict';

const fs         = require('fs')
		, getFileExt = require('./getFileExt')
		, mimeTypes  = require('./mimeTypes');

function render(req, res, filename, dirpath) {

	const dir      = dirpath || './'
  		, mimeType = mimeTypes[getFileExt(filename)]
  		, filepath = dir + '/' + filename
			, file     = fs.createReadStream(filepath);

	res.writeHead(200, {'Content-Type': mimeType});

	file.on('open', () => file.pipe(res));

}

module.exports = render;
