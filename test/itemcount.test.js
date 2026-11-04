'use strict';
const test = require('node:test');
const assert = require('node:assert');
const { itemCount } = require('../src/itemcount.js');

test('counts units', () => {
  assert.strictEqual(itemCount([{ price: 1000, qty: 2 }, { price: 2500, qty: 3 }]), 5);
  assert.strictEqual(itemCount([]), 0);
});
