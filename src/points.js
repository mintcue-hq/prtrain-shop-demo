'use strict';

// Reward points: 5% of the total, rounded down.
function points(total) {
  return Math.floor(total * 0.5);
}

module.exports = { points };
