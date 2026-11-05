'use strict';

// Coupon: 10% off the total, rounded down.
function applyCoupon(total) {
  return Math.floor(total * 0.1);
}

module.exports = { applyCoupon };
