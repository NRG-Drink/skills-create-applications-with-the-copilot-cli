/**
 * calculator.js
 *
 * Supports the following operations:
 * - Addition (+)
 * - Subtraction (-)
 * - Multiplication (*)
 * - Division (/)
 *
 * Each function accepts two or more numeric arguments (where applicable).
 */

function ensureNumbers(nums) {
  return nums.map(n => {
    const v = Number(n);
    if (Number.isNaN(v)) throw new Error(`Invalid number: ${n}`);
    return v;
  });
}

function add(...nums) {
  if (nums.length < 2) throw new Error('add requires at least two numbers');
  const vals = ensureNumbers(nums);
  return vals.reduce((acc, n) => acc + n, 0);
}

function subtract(...nums) {
  if (nums.length < 2) throw new Error('subtract requires at least two numbers');
  const vals = ensureNumbers(nums);
  return vals.slice(1).reduce((acc, n) => acc - n, vals[0]);
}

function multiply(...nums) {
  if (nums.length < 2) throw new Error('multiply requires at least two numbers');
  const vals = ensureNumbers(nums);
  return vals.reduce((acc, n) => acc * n, 1);
}

function divide(...nums) {
  if (nums.length < 2) throw new Error('divide requires at least two numbers');
  const vals = ensureNumbers(nums);
  return vals.slice(1).reduce((acc, n) => {
    if (n === 0) throw new Error('Division by zero');
    return acc / n;
  }, vals[0]);
}

function modulo(a, b) {
  const [x, y] = ensureNumbers([a, b]);
  if (y === 0) throw new Error('Modulo by zero');
  return x % y;
}

function power(base, exponent) {
  const [b, e] = ensureNumbers([base, exponent]);
  return Math.pow(b, e);
}

function squareRoot(n) {
  const [v] = ensureNumbers([n]);
  if (v < 0) throw new Error('squareRoot requires a non-negative number');
  return Math.sqrt(v);
}

module.exports = {
  add,
  subtract,
  multiply,
  divide,
  modulo,
  power,
  squareRoot,
};
