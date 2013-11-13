angular.module('angularMovieApp', ['$strap.directives']);

angular.module('angularMovieApp').config(function($routeProvider) {
    "use strict";

    $routeProvider
        .when('/home', {
            templateUrl: 'partials/home.html',
            controller : 'homeController'
        })
        .when('/movies', {
            templateUrl: 'partials/movies.html',
            controller : 'moviesController'
        })
        .when('/movies/edit/:id', {
            templateUrl: 'partials/edit.html',
            controller: 'editMovieController'
        })
        .otherwise({
            redirectTo: '/home'
        });
});