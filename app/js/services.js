"use strict";

angularMovieApp.factory("Movie", function ($resource) {

    var API_ROOT_URL = "/server/api/:item/:id/:subitem";

    var Movies = $resource(API_ROOT_URL, {item : 'movies', id : '@id'},
        {
            update : {method : 'PUT'},
            queryByCategory : {method : 'GET'},
            getActors : {method: 'GET', subitem : 'actors'}
        });

    return Movies;

});
