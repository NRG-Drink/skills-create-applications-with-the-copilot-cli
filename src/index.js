#!/usr/bin/env node
/**
 * CLI entrypoint for the Node.js calculator
 * Supports operations:
 *   add (+)
 *   subtract (-)
 *   multiply (*)
 *   divide (/)
 *   modulo (%)
 *   exponentiate (**)
 *   sqrt
 *
 * Usage examples:
 *   node src/index.js add 5 3
 *   node src/index.js + 5 3
 *   node src/index.js % 10 3
 *   node src/index.js ** 2 8
 *   node src/index.js sqrt 16
 */

const path = require('path');
const { add, subtract, multiply, divide, modulo, exponentiate, sqrt } = require('./calculator');

const argv = process.argv.slice(2);

function printUsage() {
  console.error('Usage: node src/index.js <operation> <num1> [<num2> ...]');
  console.error('Operations: add (+), subtract (-), multiply (* or x), divide (/), modulo (%), exponentiate (**), sqrt');
}

if (argv.length < 2) {
  printUsage();
  process.exit(1);
}

const op = argv[0].toLowerCase();
const rawOperands = argv.slice(1);

const ops = {
  add: add,
  '+': add,
  subtract: subtract,
  '-': subtract,
  multiply: multiply,
  'x': multiply,
  '*': multiply,
  divide: divide,
  '/': divide,
  '÷': divide,
  modulo: modulo,
  '%': modulo,
  exponentiate: exponentiate,
  '**': exponentiate,
  '^': exponentiate,
  sqrt: sqrt,
};

const fn = ops[op];
if (!fn) {
  console.error(`Unknown operation: ${argv[0]}`);
  printUsage();
  process.exit(1);
}

try {
  const result = fn(...rawOperands);
  console.log(result);
} catch (err) {
  console.error('Error:', err.message);
  process.exit(1);
}
