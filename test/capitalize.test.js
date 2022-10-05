const capitalize = require('../src/modules/capitalize.js');

describe("capitalize tests", () => {
    test("capitalize 1", () => {
        const string = 'alejandra';
        const result1 = capitalize(string);
        expect(result1).toEqual('Alejandra');
    });
});