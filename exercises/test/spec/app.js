describe('Demo', function() {
    'use strict';

    // mock the demo module
    beforeEach(angular.mock.module('Demo'));

    // test capitalize first filter in a string
    it('capitalizeFirstLetter filter should calitalize first letter in a string', function() {
        inject(function(capitalizeFirstLetterFilter) {
            expect(capitalizeFirstLetterFilter('test')).not.toBe('test');
            expect(capitalizeFirstLetterFilter('test')).toBe('Test');
        });
    });
});