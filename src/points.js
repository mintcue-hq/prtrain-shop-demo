'use strict';

// Reward points: 5% of the total, rounded down.
function points(total) {
  return Math.floor(total * 0.05);
}

module.exports = { points };
