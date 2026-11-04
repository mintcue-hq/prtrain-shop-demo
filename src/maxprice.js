'use strict';

// Highest unit price in the cart (0 for an empty cart).
function maxPrice(items) {
  return items.reduce((m, item) => Math.max(m, item.price), 0);
}

module.exports = { maxPrice };
