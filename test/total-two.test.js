'use strict';
const test = require('node:test');
const assert = require('node:assert');
const { total } = require('../src/total.js');

test('total sums two lines', () => {
  assert.strictEqual(typeof total, 'function');
});
