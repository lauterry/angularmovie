"use strict";

angularMovieApp.service("Movie", function ($http) {
    var API_URI = '/server/api/movies';

    return {

        fetch : function() {
            return $http.get(API_URI);
        },

        create : function(movie) {
            return  $http.post(API_URI, movie);
        }

    };

});
