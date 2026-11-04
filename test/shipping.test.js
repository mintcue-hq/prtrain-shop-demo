'use strict';
const test = require('node:test');
const assert = require('node:assert');
const { shippingFee } = require('../src/total.js');

test('shipping is free from 30000', () => {
assert.strictEqual(shippingFee(30000), 0);
assert.strictEqual(shippingFee(29999), 3000);
});
