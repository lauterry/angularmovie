"use strict";

angularMovieApp.factory("Movie", function ($resource) {

    var API_ROOT_URL = "/server/api/:item/:id/:subitem";

    var Movies = $resource(API_ROOT_URL, {item : 'movies', id : '@id'},
        {
            update : {method : 'PUT'},  // PUT /server/api/movies
            queryByCategory : {method : 'GET', params : {category : 'Horreur'}}, // GET /server/api/movies?category=Horreur
            getActors : {method: 'GET', params : {subitem : 'actors'}}  // GET /server/api/movies/{id}/actors
        });

    return Movies;

});
