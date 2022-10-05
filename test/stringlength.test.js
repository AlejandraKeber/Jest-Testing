const stringLength = require('../src/modules/stringlength');

test('string length hola should be 4', () => {
    expect(stringLength('hola')).toBe(4);
});

test('string length alejandrakeber should be 14', () => {
    expect(stringLength('alejandrakeber')).toBe('error: string length should be between 1 and 10');
});

test('string length - should be 0', () => {
    expect(stringLength('')).toBe('error: string length should be between 1 and 10');
});