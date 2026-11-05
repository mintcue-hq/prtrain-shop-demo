'use strict';
const test = require('node:test');
const assert = require('node:assert');
const { vat } = require('../src/tax.js');

test('VAT is 10% of the total', () => {
  assert.strictEqual(vat(10000), 1000);
  assert.strictEqual(vat(0), 0);
});
