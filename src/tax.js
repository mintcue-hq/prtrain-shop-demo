'use strict';

// VAT in cents for an order total in cents (10 percent).
function vat(total) {
  return total * 0.1;
}

// Total with VAT for a cart line list.
function totalWithVat(items) {
  const sum = items.reduce((n, item) => n + item.price * item.qty, 0);
  return sum + vat(sum);
}

module.exports = { vat, totalWithVat };
