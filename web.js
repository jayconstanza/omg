'use strict';

var gzippo = require('gzippo');
var express = require('express');
var app = express();
 
app.use(express.logger('dev'));
app.use(gzippo.staticGzip('' + __dirname + '/dist'));
app.listen(process.env.PORT || 5000);

app.get('/fotos', function(req, res) {
	res.sendfile('' + __dirname + '/dist/views/snapshots/snapshot__fotos.html'); // load the single view file (angular will handle the page changes on the front-end)
});