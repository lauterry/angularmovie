'use strict';

describe('Alert directive', function() {

    // Chargement du module angularMovieApp
    // Par défaut, c'est le module "ng" qui est chargé
    beforeEach(module('angularMovieApp'));

    // chargement du template html
    beforeEach(module('partials/alert-message.html'));

    // inject() sert à injecter des services dans une fonction
    beforeEach(inject(function($rootElement, $compile, $rootScope) {

        // Ajout de la directive dans le DOM tel que l'on utiliserait
        $rootElement.html('<alert-message show="showAlert" title="{{alertTitle}}" message="{{alertMessage}}"></alert-message>');

        // compilation de la directive
        $compile($rootElement)($rootScope);

    }));

    it('should', inject(function($rootElement, $rootScope) {

        // on affecte les valeurs attendues par la directive
        // ici, la directive alert-message attend un titre, un message et un flag pour afficher ou non
        $rootScope.$apply(function() {
            $rootScope.showAlert = false;
        });

        var style = $rootElement.find('alert-message').find('div').attr('style');
        expect(style).toBe('display: none;');

        // on affecte les valeurs attendues par la directive
        // ici, la directive alert-message attend un titre, un message et un flag pour afficher ou non
        $rootScope.$apply(function() {
            $rootScope.alertTitle = 'A title';
            $rootScope.alertMessage = 'A message';
            $rootScope.showAlert = true;
        });

        // récupération de l'élément h4 de la directive
        var h4 = $rootElement.find('h4');
        var p = $rootElement.find('p');
        style = $rootElement.find('alert-message').find('div').attr('style');

        expect(h4.html()).toBe('A title');
        expect(p.text()).toBe('A message');
        expect(style).toBe('');

    }));

});
