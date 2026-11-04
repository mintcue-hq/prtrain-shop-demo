'use strict';

// Lowest unit price in the cart (0 for an empty cart).
function minPrice(items) {
  if (items.length === 0) return 0;
  return items.reduce((m, item) => Math.min(m, item.price), Infinity);
}

module.exports = { minPrice };
