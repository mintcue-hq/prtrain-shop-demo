'use strict';
const test = require('node:test');
const assert = require('node:assert');
const { applyCoupon } = require('../src/total.js');

test('a coupon larger than the total becomes store credit', () => {
  assert.strictEqual(applyCoupon(1000, 300), 700);
  assert.strictEqual(applyCoupon(1000, 1500), -500);
});
