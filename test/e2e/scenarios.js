'use strict';

describe('angularMovieApp', function () {

    describe('static routes', function () {

        it('should navigate to home', function () {
            browser().navigateTo('/index.html#/home');
            expect(element('.container').text()).toContain('Bienvenue sur AngularMovie');
        });

        it('should navigate to how it works', function () {
            browser().navigateTo('/index.html#/movies');
            expect(element('.container').text()).toContain('Ma vidéothèque');
        });

    });

    describe('Movie list view', function () {

        beforeEach(function() {
            browser().navigateTo('/index.html#/movies');
            input('search').enter('');
        });

        it('should render movies from server', function() {
            var movieElements = repeater('.thumbnails > li', 'Movie list');
            expect(movieElements.count()).toEqual(9);
        });

        it('should show number of movies', function() {
            expect(element('.page-header > h1 > small').text()).toMatch('9 films');
        });

        it('should be able to search for a movie', function() {
            input('search').enter('Seigneur');
            var movieElements = repeater('.thumbnails > li', 'Movie list');
            expect(movieElements.count()).toEqual(3);
        });

        it('should be able to sort by movie title', function() {
            element(':button.btn-info').click();
            var movieElements = repeater('.thumbnails > li', 'Movie list');
            expect(movieElements.column('movie.title')).toEqual(["[REC]","AVATAR","CRAZY KUNG FU","RESIDENT EVIL",
                "SEIGNEUR DES ANNEAUX : LA COMMUNAUTÉ DE L'ANNEAU","SEIGNEUR DES ANNEAUX : LE RETOUR DU ROI",
                "SEIGNEUR DES ANNEAUX : LES DEUX TOURS","THE GRUDGE","YIP MAN 2"]);
        });

    });

});
