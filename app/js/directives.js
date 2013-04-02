"use strict";

angularMovieApp.directive('alertMessage', function(){
    return {
        template : "<div class='alert alert-danger fade in' ng-show='show'>" +
            "<h4>{{title}}</h4>" +
            "<p>{{message}}</p>" +
            "<p>" +
            "<button class='btn btn-danger'>Fermer</button>" +
            "<button class='btn btn-warning'>Envoyer les logs et fermer</button>" +
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

            var closeButton =  lElement.find('.btn-danger');
            var logButton = lElement.find('.btn-warning');

            closeButton.bind('click', function(){
                scope.$apply(function(){
                    scope.show = false;
                });
            });

            logButton.bind('click', function(){
                console.log(lAttributes + lAttributes.message);
                logButton.text('Envoyé');
                logButton.removeClass('btn-warning');
                logButton.addClass('btn-success');
            });

        }
    };
});