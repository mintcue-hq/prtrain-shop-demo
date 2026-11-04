'use strict';
const test = require('node:test');
const assert = require('node:assert');
const { avg } = require('../src/avg.js');

test('avg is a function', () => {
  assert.strictEqual(typeof avg, 'function');
});
