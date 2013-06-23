"use strict";

angularMovieApp.controller("homeController" ,function ($scope) {

    $scope.user = 'Thierry LAU';

});

angularMovieApp.controller("moviesController" ,function ($scope, Movie) {

    $scope.movies = Movie.query();

    $scope.deleteMovie = function(index){

        $scope.movies[index].$remove(function (){
            $scope.movies.splice(index, 1);
        });

    };

});

angularMovieApp.controller('editMovieController', function($scope, Movie, $routeParams, $location){

    var movieId = $routeParams.id;

    $scope.movie = Movie.get({id : movieId});

    $scope.updateMovie = function(data){

        $scope.movie.$update(function(){
            $location.path('/movies');
        })
    };
});

angularMovieApp.controller("movieFormController" ,function ($scope, Movie) {
    $scope.addMovie = function(data){

        var movie = new Movie(data);

        movie.$save(function(u, putResponseHeaders){
            $scope.movies.push(movie);
            $scope.movie = {};
        });

    };
});