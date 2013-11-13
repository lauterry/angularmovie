angular.module('angularMovieApp').factory("Movie", function ($http) {
    "use strict";

    var API_URI = '/server/api/movies';

    return {

        fetch : function() {
            return $http.get(API_URI, {cache : true});
        },

        create : function(movie) {
            return  $http.post(API_URI, movie);
        },

        remove  : function(id) {
            return $http.delete(API_URI + '/' + id);
        },

        fetchOne : function(id) {
            return $http.get(API_URI + '/' + id, {cache : true});
        },

        update : function(movie) {
             return $http.put(API_URI, movie);
        }

    };

});
