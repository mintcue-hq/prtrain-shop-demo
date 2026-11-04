'use strict';
const test = require('node:test');
const assert = require('node:assert');
const { shippingFee } = require('../src/total.js');

test('shipping is free from 20000', () => {
  assert.strictEqual(shippingFee(20000), 0);
});
