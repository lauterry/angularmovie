"use strict";

require('colors');

var express 	= require('express'),
	bodyParser  = require('body-parser'),
	http        = require('http'),
	path        = require('path'),
	serveStatic = require('serve-static'),
    api 		= require('./routes/api');

var app = express();
var server = http.createServer(app);

app.set('port', process.env.PORT || 3001);
app.use(serveStatic(path.join(__dirname, 'app')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function (req, res) {
	res.render('index');
}),

// JSON API
app.get('/server/api/movies', api.fetchMovies);
app.get('/server/api/movies/:id', api.fetchMovie);
app.get('/server/api/movies/:id/actors', api.fetchActorsOfMovie);
app.post('/server/api/movies', api.addMovie);
app.put('/server/api/movies', api.updateMovie);
app.delete('/server/api/movies/:id', api.deleteMovie);


server.listen(app.get('port'), function() {
	console.log('✔︎︎ Express server listening on http://localhost:%d/'.green, app.get('port'));
});
