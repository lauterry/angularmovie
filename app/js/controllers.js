"use strict";

angularMovieApp.controller("homeController" ,function ($scope) {

    $scope.user = 'Thierry LAU';

});

angularMovieApp.controller("moviesController" ,function ($scope) {

    $scope.movies = [
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
            releaseYear : "2003",
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

});

angularMovieApp.controller("movieFormController" ,function ($scope) {

    $scope.addMovie = function(movie){
        $scope.movies.push(movie);
        $scope.movie = {};
    };

});

