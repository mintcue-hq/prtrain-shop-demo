'use strict';
const test = require('node:test');
const assert = require('node:assert');
const { itemCount } = require('../src/count.js');

test('counts units across cart lines', () => {
  assert.strictEqual(itemCount([{ price: 1000, qty: 2 }, { price: 500, qty: 3 }]), 5);
  assert.strictEqual(itemCount([]), 0);
});
