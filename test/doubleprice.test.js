import test from 'node:test';
import assert from 'node:assert/strict';
import { doublePrice } from '../src/doubleprice.js';
test('double price', () => { assert.equal(doublePrice(300), 600); });
