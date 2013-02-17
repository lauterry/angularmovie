"use strict";

angularMovieApp.controller("homeController" ,function ($scope) {

    $scope.user = 'Thierry LAU';

});

angularMovieApp.controller("moviesController" ,function ($scope, Movie) {

    Movie.fetch().success(function(resp){
        $scope.movies = resp.movies;
    });

    $scope.deleteMovie = function(id){
        Movie.remove(id).success(function(resp){
            for(var i = 0; i < $scope.movies.length; i++){
                if($scope.movies[i].id === id){
                    $scope.movies.splice(i, 1);
                }
            }
        });
    };

});

angularMovieApp.controller('editMovieController', function($scope, $http, $routeParams, $location){

    var movieId = $routeParams.id;

    $http.get('/server/api/movies/' + movieId).success(function(movie){
       $scope.movie = movie;
    });

    $scope.updateMovie = function(movie){
       $http.put('/server/api/movies', movie)
           .success(function(){
               $location.path('/movies');
           })
           .error(function(resp){
               console.log(resp);
           });
    };
});
