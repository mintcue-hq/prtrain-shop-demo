'use strict';
const test = require('node:test');
const assert = require('node:assert');
const { orderTotal } = require('../src/total.js');

test('sums price * qty and applies the discount', () => {
  assert.strictEqual(orderTotal([{ price: 1000, qty: 2 }, { price: 500, qty: 1 }]), 2500);
  assert.strictEqual(orderTotal([{ price: 1000, qty: 1 }], 10), 900);
  assert.strictEqual(orderTotal([]), 0);
  assert.strictEqual(orderTotal([{ price: 500, qty: 2 }], 0), 1000);
});
