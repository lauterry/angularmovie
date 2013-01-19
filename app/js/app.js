"use strict";

var angularMovieApp = angular.module('angularMovieApp', []);

angularMovieApp.config(['$routeProvider', function($routeProvider) {
    $routeProvider
        .when('/home', {
            templateUrl: 'partials/home.html',
            controller : 'homeController'
        })
        .when('/movies', {
            templateUrl: 'partials/movies.html',
            controller : 'moviesController'
        })
        .otherwise({
            redirectTo: '/home'
        });
}]);