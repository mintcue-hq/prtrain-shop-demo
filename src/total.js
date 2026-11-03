'use strict';

// Order total in cents: sum of price * qty, minus a percent discount.
function orderTotal(items, discountPercent = 0) {
  let sum = 0;
  for (const item of items) sum += item.price * item.qty;
  return Math.round(sum * (100 - discountPercent) / 100);
}

module.exports = { orderTotal };
