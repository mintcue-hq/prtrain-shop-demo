'use strict';
const test = require('node:test');
const assert = require('node:assert');
const { maxPrice } = require('../src/maxprice.js');

test('returns the highest unit price', () => {
  assert.strictEqual(maxPrice([{ price: 1000, qty: 2 }, { price: 2500, qty: 1 }]), 2500);
  assert.strictEqual(maxPrice([]), 0);
});
