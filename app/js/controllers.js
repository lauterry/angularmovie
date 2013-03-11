"use strict";

angularMovieApp.controller("homeController" ,function ($scope) {

    $scope.user = 'Thierry LAU';

});

angularMovieApp.controller("moviesController" ,function ($scope, Movie) {

    Movie.fetch().success(function(resp){
        $scope.movies = resp.movies;
    });

    $scope.deleteMovie = function(index){
        Movie.remove($scope.movies[index].id)
            .success(function(resp){
                $scope.movies.splice(index, 1);
            }
        );
    };

});

angularMovieApp.controller('editMovieController', function($scope, Movie, $routeParams, $location){

    var movieId = $routeParams.id;

    Movie.fetchOne(movieId).success(function(movie){
       $scope.movie = movie;
    });

    $scope.updateMovie = function(movie){
       Movie.update(movie)
           .success(function(){
               $location.path('/movies');
           })
           .error(function(resp){
               console.log(resp);
           });
    };
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