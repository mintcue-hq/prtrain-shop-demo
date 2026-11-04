'use strict';
const test = require('node:test');
const assert = require('node:assert');
const { orderTotal } = require('../src/total.js');

test('total sums two lines', () => {
  assert.strictEqual(typeof orderTotal, 'function');
  assert.strictEqual(orderTotal([{ price: 1000, qty: 2 }, { price: 500, qty: 1 }]), 2500);
});
