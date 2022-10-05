const Calculator = require('../src/modules/calculator.js');

describe("calculator sum tests", () => {
    test("calculator sum 1", () => {
        //Arrange
        const a = 1;
        const b = 2;

        //Act
        const result1 = Calculator.add(a, b);

        //Assert
        expect(result1).toEqual(3);
    });

    test("calculator sum 2", () => {
        const a = -15;
        const b = 5;

        const result2 = Calculator.add(a, b);

        expect(result2).toEqual(-10);
    });

    test("calculator sum 3", () => {
        const a = 1.5;
        const b = 2.5;

        const result3 = Calculator.add(a, b);

        expect(result3).toBeCloseTo(4);
    });
});

describe("calculator subtract tests", () => {
    test("calculator subtract 1", () => {
        const a = 3;
        const b = 2;

        const result1 = Calculator.subtract(a, b);

        expect(result1).toEqual(1);
    });

    test("calculator subtract 2", () => {
        const a = -10;
        const b = 10;

        const result2 = Calculator.subtract(a, b);

        expect(result2).toEqual(-20);
    });

    test("calculator subtract 3", () => {
        const a = 10;
        const b = 10;

        const result3 = Calculator.subtract(a, b);

        expect(result3).toBeCloseTo(0);
    });
});

describe("calculator multiply tests", () => {
    test("calculator multiply 1", () => {
        const a = 1;
        const b = 2;

        const result1 = Calculator.multiply(a, b);

        expect(result1).toEqual(2);
    });

    test("calculator multiply 2", () => {
        const a = 10;
        const b = 10;

        const result2 = Calculator.multiply(a, b);

        expect(result2).toEqual(100);
    });

    test("calculator multiply 3", () => {
        const a = 10
        const b = -1;

        const result3 = Calculator.multiply(a, b);

        expect(result3).toBeCloseTo(-10);
    });
});

describe("calculator divide tests", () => {
    test("calculator divide 1", () => {
        const a = 6;
        const b = 3;

        const result1 = Calculator.divide(a, b);

        expect(result1).toEqual(2);
    });

    test("calculator divide 2", () => {
        const a = -15;
        const b = 3;

        const result2 = Calculator.divide(a, b);

        expect(result2).toEqual(-5);
    });

    test("calculator divide 3", () => {
        const a = 10;
        const b = 10;

        const result3 = Calculator.divide(a, b);

        expect(result3).toBeCloseTo(1);
    });
});