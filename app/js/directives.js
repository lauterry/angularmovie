"use strict";

angularMovieApp.directive('alertMessage', function(){
    return {
        template : "<div class='alert alert-danger fade in' ng-show='show'>" +
            "<h4>{{title}}</h4>" +
            "<p>{{message}}</p>" +
            "<p>" +
            "<button class='btn btn-danger' ng-click='closeAlert()'>Fermer</button>" +
            "<button class='btn btn-warning' ng-click='sendLog()'>Envoyer les logs</button>" +
            "</p>" +
            "</div>",
        //templateUrl : 'partials/alert-message.html',
        replace : true,
        restrict : 'E',
        scope : {
            show : "=",
            title : "@",
            message : "@"
        },
        link : function(scope, lElement, lAttributes){

            var logButton = lElement.find('.btn-warning');

            scope.closeAlert = function(){
                scope.show = false;
            };

            scope.sendLog = function(){
                console.log(lAttributes.title + ' : ' + lAttributes.message);
                logButton.text('Envoyé');
                logButton.removeClass('btn-warning');
                logButton.addClass('btn-success');
            };

        }
    };
});