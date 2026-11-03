'use strict';

// Order total in cents: sum of item prices, minus a percent discount.
function orderTotal(items, discountPercent = 0) {
  const sum = items.reduce((acc, item) => acc + item.price, 0);
  return Math.round(sum * (100 - discountPercent) / 100);
}

// Shipping fee in cents: free from 30000, else 3000.
function shippingFee(total) {
  return total >= 30000 ? 0 : 3000;
}

module.exports = { orderTotal, shippingFee };
