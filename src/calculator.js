/**
 * calculator.js
 *
 * Supports the following operations:
 * - Addition (+)
 * - Subtraction (-)
 * - Multiplication (*)
 * - Division (/)
 * - Modulo (%)
 * - Exponentiation (**)
 * - Square Root (sqrt)
 *
 * Each function accepts two or more numeric arguments (where applicable),
 * except sqrt which accepts exactly one numeric argument.
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
  if (arguments.length < 2) throw new Error('modulo requires at least two numbers');
  const [va, vb] = ensureNumbers([a, b]);
  if (vb === 0) throw new Error('Modulo by zero');
  return va % vb;
}

function exponentiate(base, exponent) {
  if (arguments.length < 2) throw new Error('exponentiate requires at least two numbers');
  const [vBase, vExp] = ensureNumbers([base, exponent]);
  return vBase ** vExp;
}

function sqrt(n) {
  if (arguments.length < 1) throw new Error('sqrt requires a number');
  const [v] = ensureNumbers([n]);
  if (v < 0) throw new Error('Cannot take square root of a negative number');
  return Math.sqrt(v);
}

module.exports = {
  add,
  subtract,
  multiply,
  divide,
  modulo,
  exponentiate,
  sqrt,
};
