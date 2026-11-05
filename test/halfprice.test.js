import test from 'node:test';
import assert from 'node:assert/strict';
import { halfPrice } from '../src/halfprice.js';
test('half price', () => { assert.equal(halfPrice(1000), 500); });
