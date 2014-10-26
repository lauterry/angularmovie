"use strict";

angularMovieApp.controller("homeController" ,function ($scope) {

    $scope.user = 'Thierry LAU';

});

angularMovieApp.controller("moviesController" ,function ($scope, Movie) {

	$scope.tri = 'title';

    Movie.fetch().success(function(resp){
        $scope.movies = resp;
    });


    $scope.deleteMovie = function(index){
        Movie.remove($scope.movies[index].id)
            .success(function(resp){
                $scope.movies.splice(index, 1);
            }
        );
    };

	$scope.trier = function (tri) {
		if ($scope.tri === tri) {
			$scope.reverse = !$scope.reverse
		}
		$scope.tri = tri;
	}

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

    $scope.showAlert = false;

    $scope.addMovie = function(movie){
        Movie.create(movie)
            .success(function(){
                var newMovie = {};
                angular.copy(movie, newMovie);
                $scope.movies.push(newMovie);
                $scope.movie = {};
            })
    };
});
