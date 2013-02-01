"use strict";

angularMovieApp.directive('alertMessage', function(){
    return {
        templateUrl : 'partials/alert-message.html',
        replace : false,
        restrict : 'E',
        scope : {
            show : "=",
            title : "@",
            message : "@"
        }
    };
});