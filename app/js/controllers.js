"use strict";

angularMovieApp.controller("homeController" ,function ($scope) {

    $scope.user = 'Thierry LAU';

});

angularMovieApp.controller("moviesController" ,function ($scope, $http) {

    $http.get('/server/api/movies').success(function(resp){
        $scope.movies = resp;
    });

    $scope.deleteMovie = function(movie){
		var index = $scope.movies.indexOf(movie);

        $http.delete('/server/api/movies/' + movie.id)
            .success(function(){
                $scope.movies.splice(index, 1);
            }
        );
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

angularMovieApp.controller("movieFormController" ,function ($scope, $http) {

    $scope.addMovie = function(movie){

        $http.post('/server/api/movies', movie)
            .success(function(){
                $scope.movies.push(movie);
                $scope.movie = {};
            })
            .error(function(resp){
                console.log(resp);
            });

    };

});

