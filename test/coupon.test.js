'use strict';
const test = require('node:test');
const assert = require('node:assert');
const { applyCoupon } = require('../src/coupon.js');

test('takes 10% off the total', () => {
  assert.strictEqual(applyCoupon(10000), 9000);
});
