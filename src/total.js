'use strict';

// Order total in cents: sum of price * qty, minus a percent discount.
function orderTotal(items, discountPercent = 0) {
  let sum = 0;
  for (const item of items) sum += item.price * item.qty;
  return Math.round(sum * (100 - discountPercent) / 100);
}

// Shipping fee in cents: free from 30000, else 3000.
function shippingFee(total) {
  return total >= 30000 ? 0 : 3000;
}

// Coupon: subtract a fixed amount from the order total.
function applyCoupon(total, amount) {
  return total - amount;
}

module.exports = { orderTotal, shippingFee, applyCoupon };
