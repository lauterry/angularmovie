"use strict";

angularMovieApp.filter('stars', function () {

    var STARS = {
        1: '\u2605',
        2: '\u2605\u2605',
        3: '\u2605\u2605\u2605',
        4: '\u2605\u2605\u2605\u2605',
        5: '\u2605\u2605\u2605\u2605\u2605'
    };

    return function(startCount) {
        return STARS[startCount];
    };
});


angularMovieApp.filter('poster', function () {
    return function(posterUrl) {
        if(!posterUrl){
            return "img/no-poster.jpg";
        } else {
            return posterUrl;
        }
    };
});