describe('angularMovieApp', function () {

    describe('static routes', function () {

        beforeEach(function() {
            browser().navigateTo('/');
        });

        it('should jump to the /home path when / is accessed', function() {
            browser().navigateTo('#/');
            expect(browser().location().path()).toBe("/home");
        });

        it('should navigate to home', function () {
            browser().navigateTo('#/home');
            expect(element('[ng-view]').text()).toContain('Bienvenue sur AngularMovie');
        });

        it('should navigate to how it works', function () {
            browser().navigateTo('#/movies');
            expect(element('[ng-view]').text()).toContain('Ma vidéothèque');
        });

    });

    describe('Movie list view', function () {

        beforeEach(function() {
            browser().navigateTo('#/movies');
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

            input('search').enter('2010');
            expect(movieElements.count()).toEqual(2);

            input('search').enter('XXX');
            expect(movieElements.count()).toEqual(0);
        });

        it('should be able to sort by movie title', function() {
            element('#orderTitleButton').click();
            var movieElements = repeater('.thumbnails > li', 'Movie list');
            expect(movieElements.column('movie.title')).toEqual(["YIP MAN 2","THE GRUDGE",
                "SEIGNEUR DES ANNEAUX : LES DEUX TOURS","SEIGNEUR DES ANNEAUX : LE RETOUR DU ROI",
                "SEIGNEUR DES ANNEAUX : LA COMMUNAUTÉ DE L'ANNEAU","RESIDENT EVIL","CRAZY KUNG FU","AVATAR","[REC]"]);
            element('#orderTitleButton').click();
            expect(movieElements.column('movie.title')).toEqual(["[REC]","AVATAR","CRAZY KUNG FU","RESIDENT EVIL",
                "SEIGNEUR DES ANNEAUX : LA COMMUNAUTÉ DE L'ANNEAU","SEIGNEUR DES ANNEAUX : LE RETOUR DU ROI",
                "SEIGNEUR DES ANNEAUX : LES DEUX TOURS","THE GRUDGE","YIP MAN 2"]);
        });


        it('should be able to sort by movie releaseYear', function() {
            element('#orderYearButton').click();
            var movieElements = repeater('.thumbnails > li', 'Movie list');
            expect(movieElements.column('movie.releaseYear')).toEqual(["2010", "2010", "2008", "2005", "2004", "2003", "2002", "2002", "2001"]);
            element('#orderYearButton').click();
            expect(movieElements.column('movie.releaseYear')).toEqual(["2001", "2002", "2002", "2003", "2004", "2005", "2008", "2010", "2010"]);
        });

    });

});