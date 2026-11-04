'use strict';
const test = require('node:test');
const assert = require('node:assert');
const { orderTotal } = require('../src/total.js');

test('a 50 percent discount halves the total', () => {
  assert.strictEqual(orderTotal([{ price: 2000, qty: 1 }], 50), 1000);
});
