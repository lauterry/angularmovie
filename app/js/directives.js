

/**
 * inspired by http://www.adobe.com/devnet/html5/articles/angularjs-directives-and-the-computer-science-of-javascript.html
 * by Burke Holland
 */
angular.module('angularMovieApp').directive('editable', function(){
    "use strict";

    return {
        restrict : 'E',
        replace : true,
        templateUrl: "partials/editable.html",
        scope : {
            label : '@',
            text : '='
        },
        link : function(scope, element, attrs){

            // editMode is disable by default
            scope.editMode = false;

            // if label attribut is not provide then remove
            // the label element
            if(!attrs.label){
                element.find('label').remove();
            }

            // find the input elemnt of this directive ...
            var input = element.find('input');
            // and listen for blur event
            input.bind('blur', function(){
                // since blur event occured ouside the angular execution context
                // we need to call scope.$apply to tell angularjs about the changes
                scope.$apply(function(){
                    // the change is to disable the editMode
                    scope.editMode = false;
                });

            });

        }
    };

});

angular.module('angularMovieApp').directive('alertMessage', function(){
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