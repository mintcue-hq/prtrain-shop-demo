'use strict';
const test = require('node:test');
const assert = require('node:assert');
const { avgUnitPrice } = require('../src/avg.js');

test('avgUnitPrice is a function', () => {
  assert.strictEqual(typeof avgUnitPrice, 'function');
});
