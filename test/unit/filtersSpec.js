'use strict';

describe('filters', function() {

    beforeEach(module('angularMovieApp'));

    it('should show proper number of stars', inject(function(starsFilter) {
        expect(starsFilter(1)).toBe('\u2605');
        expect(starsFilter(3)).toBe('\u2605\u2605\u2605');
    }));

    it('should show default picture if none is provided', inject(function(posterFilter) {
        expect(posterFilter('')).toBe('img/no-poster.jpg');
        expect(posterFilter('img/picture.jpg')).toBe('img/picture.jpg');

    }));
});