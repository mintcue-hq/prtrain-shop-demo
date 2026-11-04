'use strict';
const test = require('node:test');
const assert = require('node:assert');
const { minPrice } = require('../src/minprice.js');

test('returns the lowest unit price', () => {
  assert.strictEqual(minPrice([{ price: 1000, qty: 2 }, { price: 2500, qty: 1 }]), 1000);
  assert.strictEqual(minPrice([]), 0);
});
