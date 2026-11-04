'use strict';
const test = require('node:test');
const assert = require('node:assert');
const { totalWithVat } = require('../src/tax.js');

test('adds 10 percent VAT', () => {
  assert.strictEqual(totalWithVat([{ price: 1000, qty: 2 }]), 2200);
});
