const { add, subtract, multiply, divide, modulo, exponentiate, sqrt } = require('../calculator');

describe('calculator operations', () => {
  test('addition: 2 + 3 => 5', () => {
    expect(add(2, 3)).toBe(5);
  });

  test('addition with multiple operands: 1 + 2 + 3 => 6', () => {
    expect(add(1, 2, 3)).toBe(6);
  });

  test('subtraction: 10 - 4 => 6', () => {
    expect(subtract(10, 4)).toBe(6);
  });

  test('subtraction with multiple operands: 20 - 5 - 3 => 12', () => {
    expect(subtract(20, 5, 3)).toBe(12);
  });

  test('multiplication: 45 * 2 => 90', () => {
    expect(multiply(45, 2)).toBe(90);
  });

  test('multiplication with multiple operands: 2 * 3 * 4 => 24', () => {
    expect(multiply(2, 3, 4)).toBe(24);
  });

  test('division: 20 / 5 => 4', () => {
    expect(divide(20, 5)).toBe(4);
  });

  test('division with multiple operands: 100 / 2 / 5 => 10', () => {
    expect(divide(100, 2, 5)).toBe(10);
  });

  test('division by zero should throw', () => {
    expect(() => divide(10, 0)).toThrow(/Division by zero/);
  });

  test('modulo: 10 % 3 => 1', () => {
    expect(modulo(10, 3)).toBe(1);
  });

  test('modulo: 15 % 4 => 3', () => {
    expect(modulo(15, 4)).toBe(3);
  });

  test('modulo by zero should throw', () => {
    expect(() => modulo(10, 0)).toThrow(/Modulo by zero/);
  });

  test('modulo with invalid input should throw', () => {
    expect(() => modulo('a', 3)).toThrow(/Invalid number/);
  });

  test('exponentiation: 2 ** 8 => 256', () => {
    expect(exponentiate(2, 8)).toBe(256);
  });

  test('exponentiation: 3 ** 3 => 27', () => {
    expect(exponentiate(3, 3)).toBe(27);
  });

  test('exponentiation with fractional exponent: 4 ** 0.5 => 2', () => {
    expect(exponentiate(4, 0.5)).toBe(2);
  });

  test('exponentiation with invalid input should throw', () => {
    expect(() => exponentiate('a', 2)).toThrow(/Invalid number/);
  });

  test('sqrt: sqrt(16) => 4', () => {
    expect(sqrt(16)).toBe(4);
  });

  test('sqrt: sqrt(9) => 3', () => {
    expect(sqrt(9)).toBe(3);
  });

  test('sqrt: sqrt(2) returns correct float', () => {
    expect(sqrt(2)).toBeCloseTo(Math.sqrt(2));
  });

  test('sqrt of negative number should throw', () => {
    expect(() => sqrt(-1)).toThrow(/Cannot take square root of a negative number/);
  });

  test('sqrt with invalid input should throw', () => {
    expect(() => sqrt('abc')).toThrow(/Invalid number/);
  });

  test('invalid numeric input should throw', () => {
    expect(() => add(1, 'a')).toThrow(/Invalid number/);
    expect(() => subtract('b', 2)).toThrow(/Invalid number/);
  });

  test('require at least two operands', () => {
    expect(() => add(1)).toThrow(/requires at least two numbers/);
    expect(() => subtract(1)).toThrow(/requires at least two numbers/);
    expect(() => multiply(1)).toThrow(/requires at least two numbers/);
    expect(() => divide(1)).toThrow(/requires at least two numbers/);
  });
});
