const reverseString = require('../src/modules/reversestring');

test('hello should be olleh', () => {
    expect(reverseString('hello')).toBe('olleh');
});