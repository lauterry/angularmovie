"use strict";

/**
 * inspired by http://www.adobe.com/devnet/html5/articles/angularjs-directives-and-the-computer-science-of-javascript.html
 * by Burke Holland
 */
angularMovieApp.directive('editable', function(){

    return {
        restrict : 'E',
        replace : true,
        template:   '<div>' +
                        '<label ng-click="edit()" ng-hide="editMode">{{value}}</label> ' +
                        '<input type="text" ng-show="editMode" ng-model="value">' +
                    '</div>',
        scope : {
            value : "=data"
        }, // specify an isolate scope for each editable directive
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
                });

            });

            // called when the label is clicked
            scope.edit = function() {
                scope.editMode = true;
            };

        }

    };

});