'use strict';
const test = require('node:test');
const assert = require('node:assert');
const { orderTotal } = require('../src/total.js');

test('an empty cart totals 0', () => {
  assert.strictEqual(orderTotal([]), 0);
});
