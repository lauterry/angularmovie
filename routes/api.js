"use strict";

var movies = [
    {
        id: 1,
        title : "Avatar",
        releaseYear : "2010-09-01",
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
        releaseYear : "2003-12-03",
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
        releaseYear : "2004-12-29",
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
        releaseYear : "2010-06-15",
        poster : "img/yipman.jpg",
        directors : "Wilson Yip",
        actors : "Donnie Yen, Sammo Hung Kam-Bo, Simon Yam, Lynn Hung, Xiaoming Huang",
        synopsis : "Film biographique sur la vie de Ip Man, pionnier du Wing Chun et maitre de Bruce Lee.",
        rate : "5"
    },
    {
        id: 5,
        title : "[REC]",
        releaseYear : "2008-04-23",
        poster : "img/rec.jpg",
        directors : "Paco Plaza, Jaume Balagueró",
        actors : "Manuela Velasco, Ferran Terraza, Jorge Yamam, Carlos Lasarte, Pablo Rosso",
        synopsis : "Alors qu'ils suivent des pompiers lors d'une intervention, une reporter et son caméraman " +
            "restent coincés dans un immeuble placé sous quarantaine. A l'intérieur, ils font face à d'étranges " +
            "créatures...",
        rate : "3"
    },
    {
        id: 6,
        title : "Resident Evil",
        releaseYear : "2002-04-03",
        poster : "img/residentevil.jpg",
        directors : "Paul W.S. Anderson",
        actors : "Milla Jovovich, Eric Mabius, Michelle Rodriguez, James Purefoy, Liz May Brice",
        synopsis : "Un virus mortel s'est propagé dans un laboratoire souterrain et a mis fin à toute vie humaine. " +
            "Alice et Matt doivent suivre un groupe d'intervention militaire, chargé de neutraliser le super-ordinateur " +
            "que l'on tient pour responsable du désastre.",
        rate : "4"
    },
    {
        id: 7,
        title : "Seigneur des Anneaux : les deux Tours",
        releaseYear : "2003-12-10",
        poster : "img/seigneurdesanneaux2.jpg",
        directors : "Peter Jackson",
        actors : "Elijah Wood, Sean Astin, Ian McKellen, Sala Baker, Viggo Mortensen",
        synopsis : "Frodon Sacquet, le Hobbit, doit braver de terribles dangers pour tenter de détruire " +
            "l'Anneau Unique, convoité par Sauron, le Seigneur des ténèbres. De leur côté, Gimli, Legolas et Aragorn " +
            "doivent sauver Pippin et Merry, capturés par les Orques...",
        rate : "3"
    },
    {
        id: 8,
        title : "Seigneur des Anneaux : le retour du Roi",
        releaseYear : "2003-12-17",
        poster : "img/seigneurdesanneaux3.jpg",
        directors : "Peter Jackson",
        actors : "Elijah Wood, Sean Astin, Ian McKellen, Sala Baker, Viggo Mortensen",
        synopsis : "Tandis que les ténèbres se répandent sur la Terre du Milieu, Aragorn se révèle être l'héritier " +
            "caché des rois antiques. Quant à Frodon, toujours tenté par l'Anneau, il voyage à travers les contrées " +
            "ennemies, se reposant sur Sam et Gollum...",
        rate : "4"
    },
    {
        id: 9,
        title : "Crazy Kung Fu",
        releaseYear : "2005-06-08",
        poster : "img/crazykungfu.jpg",
        directors : "Stephen Chow",
        actors : "Stephen Chow, Wah Yuen, Leung Siu Lung, Dong Zhi Hua, Chiu Chi Ling",
        synopsis : "Sing, un prétendu gangster, doit surmonter son incapacité à manier le sabre et démontrer " +
            "qu'il a toutes les qualités requises pour appartenir au prestigieux gang de Axe. Au même moment, " +
            "ce gang veut régner en maître sur une rue sacrée...",
        rate : "5"
    }
];

// GET all activities
exports.fetchMovies = function (req, res) {
    res.json(200, {movies : movies});
};

// POST
exports.addMovie = function (req, res) {
    var movie = req.body;
    movies.push(movie);
    res.json(201);
};

// DELETE
exports.deleteMovie = function (req, res) {
    var id = req.params.id;

    for(var i = 0; i < movies.length; i++){
        if(movies[i].id === id){
            movies.splice(i, 1);
            res.json(200);
        }
    }

    res.json(304, "Not modified");
};
