'use strict';

// Shipping is free from 30000 won, otherwise 3000 won.
function shippingFee(total) {
  return total > 30000 ? 3000 : 0;
}

module.exports = { shippingFee };
