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

/**
 * inspired by http://www.adobe.com/devnet/html5/articles/angularjs-directives-and-the-computer-science-of-javascript.html
 * by Burke Holland
 */
angularMovieApp.directive('editable', function(){

    return {
        restrict : 'E',
        transclude : true,
        replace : true,
        template:   '<span>' +
            '<label ng-click="edit()" ng-hide="editMode" ng-transclude></label> ' +
            '<input type="text" ng-show="editMode" >' +
            '</span>',
        scope : {}, // specify an isolate scope for each editable directive
        link : function(scope, element){

            // select the needed DOM element from the template
            var label = element.find('label');
            var input = element.find('input');

            // default, editMode is unactive
            scope.editMode = false;

            // attach a blur event to the input
            input.bind('blur', function(){
                // here we are outside the angularjs databinding system.
                // we need to call scope.$apply() to notify angularjs
                // that the model has changed (here's editMode)
                scope.$apply(function(){
                    scope.editMode = false;
                    label.text(input.val());
                });

            });

            // called when the label is clicked
            scope.edit = function() {
                scope.editMode = true;
                input.val(label.text());
            };

        }

    };

});