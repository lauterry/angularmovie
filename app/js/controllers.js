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

});

angularMovieApp.controller("movieFormController" ,function ($scope, Movie) {

    $scope.addMovie = function(movie){
        Movie.create(movie)
            .success(function(){
                $scope.movies.push(movie);
                $scope.movie = {};
                $('#movie-form-modal').modal('hide');
            })
            .error(function(resp, statusCode){
                // Affichage d'un message d'erreur
                var alert = "<div class='alert alert-danger fade in'>" +
                                "<button type='button' class='close' data-dismiss='alert'>×</button>" +
                                "<h4>Erreur " + statusCode + "</h4>" + resp.error +
                            "</div>";
                angular.element('.modal-body').prepend(alert);
            });
    };

});

