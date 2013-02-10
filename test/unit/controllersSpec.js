"use strict";

var MOVIES = [
    {
        id: 1,
        title : "Avatar",
        releaseYear : "2010",
        poster : "img/avatar.jpg",
        directors : "James Cameron",
        actors : "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang, Michelle Rodriguez",
        synopsis : "Sur la lointaine planète de Pandora, Jake Sully, un héros malgré lui, " +
            "se lance dans une quête de rédemption, de découverte, d'amour inattendu, dont l'issue sera un " +
            "combat héroïque pour sauver toute une civilisation.",
        rate : "3"
    },
    {
        id: 2,
        title : "Seigneur des Anneaux : La Communauté de l'Anneau",
        releaseYear : "2001",
        poster : "img/seigneurdesanneaux1.jpg",
        directors : "Peter Jackson",
        actors : "Elijah Wood, Sean Astin, Ian McKellen, Sala Baker, Viggo Mortensen",
        synopsis : "Frodon le Hobbit hérite de l'Anneau Unique, un instrument de pouvoir absolu" +
            "qui permettrait à Sauron, le Seigneur des ténèbres, de régner sur la Terre du Milieu." +
            " Commence alors un vaste périple visant à la destruction de l'objet.",
        rate : "5"
    },
    {
        id: 3,
        title : "The Grudge",
        releaseYear : "2004",
        poster : "img/thegrudge.jpg",
        directors : "Takashi Shimizu",
        actors : "Sarah Michelle Gellar, Jason Behr, Clea DuVall, Kadee Strickland, Bill Pullman",
        synopsis : "Dans ce qui paraît être une paisible maison de Tokyo se cache un épouvantable fléau. " +
            "Quiconque franchit le seuil de la demeure est aussitôt frappé par une malédiction qui ne tardera " +
            "pas à le tuer dans un sentiment d'indicible rage...",
        rate : "4"
    },
    {
        id: 4,
        title : "Yip Man 2",
        releaseYear : "2010",
        poster : "img/yipman.jpg",
        directors : "Wilson Yip",
        actors : "Donnie Yen, Sammo Hung Kam-Bo, Simon Yam, Lynn Hung, Xiaoming Huang",
        synopsis : "Film biographique sur la vie de Ip Man, pionnier du Wing Chun et maitre de Bruce Lee.",
        rate : "5"
    }
];

describe('moviesController', function() {
    var scope;

    var titlesFrom = function(movies) {
        return movies.map(function(movie) {
            return movie.title;
        });
    };

    beforeEach(module('angularMovieApp'));

    beforeEach(inject(function($controller, $httpBackend, $rootScope) {
        scope = $rootScope;

        $httpBackend.whenGET('/server/api/movies').respond({'movies' : MOVIES});
        $controller('moviesController', {$scope: scope});

        $httpBackend.flush();
    }));


    it('should display movies in list view by default', function() {
        expect(scope.tableView).toBe(false);
        expect(scope.tableViewIcon).toBe('icon-th-list icon-white');
        expect(scope.movies.length).toBe(4);
        expect(titlesFrom(scope.movies)).toEqual(['Avatar', 'Seigneur des Anneaux : La Communauté de l\'Anneau', 'The Grudge', 'Yip Man 2']);
    });

    it('should display movies in table View when toggle view', function() {
        scope.toogleView();
        expect(scope.tableView).toBe(true);
        expect(scope.tableViewIcon).toBe('icon-th icon-white');
        expect(scope.movies.length).toBe(4);
        expect(titlesFrom(scope.movies)).toEqual(['Avatar', 'Seigneur des Anneaux : La Communauté de l\'Anneau', 'The Grudge', 'Yip Man 2']);
    });

});

