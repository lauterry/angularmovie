/**
 * Module dependencies.
 */

"use strict";
var express = require('express'),
    routes = require('./routes'),
    api = require('./routes/api');

var app = module.exports = express();

// Configuration
app.configure(function(){
    app.set('views', __dirname + '/app');
    app.engine('.html', require('ejs').renderFile);
    app.set('view engine', 'html');
    app.set('view options', {
        layout: false
    });

    app.use(express.bodyParser());
    app.use(express.methodOverride());
    app.use(express.static(__dirname + '/app'));
    app.use(app.router);
});

app.configure('development', function(){
    app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});

app.configure('production', function(){
    app.use(express.errorHandler());
});

// Routes

app.get('/', routes.index);
app.get('/partials/:name', routes.partials);

// JSON API
app.get('/server/api/movies', api.fetchMovies);
app.get('/server/api/movies/:id', api.fetchMovie);
app.get('/server/api/movies/:id/actors', api.fetchActorsOfMovie);
app.post('/server/api/movies', api.addMovie);
app.put('/server/api/movies/:id', api.updateMovie);
app.delete('/server/api/movies/:id', api.deleteMovie);


// Start server
var port  = process.env.PORT || 3001;
app.listen(port, function(){
    console.log("Express server listening on port %d in %s mode", port, app.settings.env);
});