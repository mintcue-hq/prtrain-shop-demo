'use strict';
const test = require('node:test');
const assert = require('node:assert');
const { maxPrice } = require('../src/maxprice.js');

test('max-a: single item', () => {
  assert.strictEqual(maxPrice([{ price: 700, qty: 1 }]), 700);
});
