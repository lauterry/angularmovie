angular.module('angularMovieApp').factory("Movie", function ($http) {
    var API_URI = '/server/api/movies';

    return {

        fetch : function() {
            return $http.get(API_URI);
        },

        create : function(movie) {
            return  $http.post(API_URI, movie);
        },

        remove  : function(id) {
            return $http.delete(API_URI + '/' + id);
        },

        fetchOne : function(id) {
            return $http.get(API_URI + '/' + id);
        },

        update : function(movie) {
             return $http.put(API_URI, movie);
        }

    };

});
