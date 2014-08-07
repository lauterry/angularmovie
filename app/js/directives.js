"use strict";

/**
 * inspired by http://www.adobe.com/devnet/html5/articles/angularjs-directives-and-the-computer-science-of-javascript.html
 * by Burke Holland
 */
angularMovieApp.directive('editable', function(){

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

			scope.enterEditMode = function() {
				scope.editMode = true;
			};

			scope.$watch('editMode', function(newValue) {
				if(newValue) {
					input.focus();
				}
			});

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
    }

});
