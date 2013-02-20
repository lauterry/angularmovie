"use strict";

var angularMovieApp = angular.module('angularMovieApp', ['$strap.directives']);

angularMovieApp.config(function($routeProvider) {
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
});