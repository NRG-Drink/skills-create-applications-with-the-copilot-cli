#!/usr/bin/env node
/**
 * CLI entrypoint for the Node.js calculator
 * Supports operations:
 *   add (+)
 *   subtract (-)
 *   multiply (*)
 *   divide (/)
 *
 * Usage examples:
 *   node src/index.js add 5 3
 *   node src/index.js + 5 3
 */

const path = require('path');
const { add, subtract, multiply, divide } = require('./calculator');

const argv = process.argv.slice(2);

function printUsage() {
  console.error('Usage: node src/index.js <operation> <num1> <num2> [<num3> ...]');
  console.error('Operations: add (+), subtract (-), multiply (* or x), divide (/)');
}

if (argv.length < 3) {
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
};

const fn = ops[op];
if (!fn) {
  console.error(`Unknown operation: ${argv[0]}`);
  printUsage();
  process.exit(1);
}

try {
  const result = fn(...rawOperands);
  // Print result in a readable form
  if (Number.isInteger(result)) console.log(result);
  else console.log(result);
} catch (err) {
  console.error('Error:', err.message);
  process.exit(1);
}
