'use strict';
const test = require('node:test');
const assert = require('node:assert');
const { itemCount } = require('../src/count.js');

test('a single cart line counts its quantity', () => {
  assert.strictEqual(itemCount([{ price: 700, qty: 4 }]), 4);
});
