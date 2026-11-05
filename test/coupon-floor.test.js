'use strict';
const test = require('node:test');
const assert = require('node:assert');
const { applyCoupon } = require('../src/total.js');

test('a coupon larger than the total leaves zero', () => {
  assert.strictEqual(applyCoupon(1000, 5000), 0);
});
