const { add, subtract, multiply, divide, modulo, power, squareRoot } = require('../calculator');

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

  // New tests for extended operations
  test('modulo: 5 % 2 => 1', () => {
    expect(modulo(5, 2)).toBe(1);
  });

  test('modulo with negative dividend: -5 % 2 => -1', () => {
    expect(modulo(-5, 2)).toBe(-1);
  });

  test('modulo by zero should throw', () => {
    expect(() => modulo(10, 0)).toThrow(/Modulo by zero/);
  });

  test('power: 2 ^ 3 => 8', () => {
    expect(power(2, 3)).toBe(8);
  });

  test('power with negative exponent: 2 ^ -1 => 0.5', () => {
    expect(power(2, -1)).toBeCloseTo(0.5);
  });

  test('squareRoot of 16 => 4', () => {
    expect(squareRoot(16)).toBe(4);
  });

  test('squareRoot of 0 => 0', () => {
    expect(squareRoot(0)).toBe(0);
  });

  test('squareRoot of negative throws', () => {
    expect(() => squareRoot(-4)).toThrow(/non-negative/);
  });
});
