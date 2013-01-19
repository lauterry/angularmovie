"use strict";

angularMovieApp.controller("homeController" ,function ($scope) {

    $scope.user = 'Thierry LAU';

});

angularMovieApp.controller("moviesController" ,function ($scope, $http) {

    $http.get('/server/api/movies').success(function(resp){
        $scope.movies = resp.movies;
    });

});

angularMovieApp.controller("movieFormController" ,function ($scope, $http) {

    $scope.addMovie = function(movie){

        $http.post('/server/api/movies', movie)
            .success(function(){
                var newMovie = {};
                angular.copy(movie, newMovie);
                $scope.movies.push(newMovie);
            })
            .error(function(resp){
                console.log(resp);
            });

    };

});

