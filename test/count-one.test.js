'use strict';
const test = require('node:test');
const assert = require('node:assert');
const { itemCount } = require('../src/count.js');

test('itemCount is a function', () => {
  assert.strictEqual(typeof itemCount, 'function');
});
