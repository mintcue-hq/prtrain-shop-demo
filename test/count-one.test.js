'use strict';
const test = require('node:test');
const assert = require('node:assert');
const { count } = require('../src/count.js');

test('count is a function', () => {
  assert.strictEqual(typeof count, 'function');
});
