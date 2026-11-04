'use strict';
const test = require('node:test');
const assert = require('node:assert');
const { points } = require('../src/points.js');

test('points are 5% of the total', () => {
  assert.strictEqual(points(10000), 500);
  assert.strictEqual(points(0), 0);
});
