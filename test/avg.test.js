'use strict';
const test = require('node:test');
const assert = require('node:assert');
const { avgUnitPrice } = require('../src/avg.js');

test('average unit price', () => {
  assert.strictEqual(avgUnitPrice([{ price: 1000, qty: 1 }, { price: 2000, qty: 1 }]), 1500);
  assert.strictEqual(avgUnitPrice([]), 0);
});
