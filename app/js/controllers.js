"use strict";

angularMovieApp.controller("homeController" ,function ($scope) {

    $scope.user = 'Thierry LAU';

});

angularMovieApp.controller("moviesController" ,function ($scope, Movie) {

    Movie.fetch().success(function(resp){
        $scope.movies = resp.movies;
    });

});

angularMovieApp.controller("movieFormController" ,function ($scope, Movie) {

    $scope.addMovie = function(movie){

        Movie.create(movie)
            .success(function(){
                $scope.movies.push(movie);
                $scope.movie = {};
            })
            .error(function(resp){
                console.log(resp);
            });

    };

});

