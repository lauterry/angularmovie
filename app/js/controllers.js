"use strict";

angularMovieApp.controller("homeController" ,function ($scope) {

    $scope.user = 'Thierry LAU';

});

angularMovieApp.controller("moviesController" ,function ($scope, Movie) {

    // display mode by default
    $scope.tableView = false;
    // icon by mode by default
    $scope.tableViewIcon = 'icon-th icon-white';

    // function called when changing view mode
    $scope.toogleView = function() {
        $scope.tableView = !$scope.tableView;

        if($scope.tableView === false){
            $scope.tableViewIcon = 'icon-th-list icon-white';
        } else {
            $scope.tableViewIcon = 'icon-th icon-white';
        }
    };

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

angularMovieApp.controller("movieFormController" ,function ($scope, Movie) {

    $scope.showAlert = false;

    $scope.addMovie = function(movie){
        Movie.create(movie)
            .success(function(){
                $scope.movies.push(movie);
                $scope.movie = {};
                $scope.showAlert = false;
                $scope.dismiss();
            })
            .error(function(resp, statusCode){
                // Affichage d'un message d'erreur
                $scope.errorTitle = 'Erreur ' + statusCode ;
                $scope.errorMessage = resp.error;
                $scope.showAlert = true;
            });
    };

});

