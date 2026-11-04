'use strict';

// Total number of units in the cart.
function itemCount(items) {
  return items.reduce((n, item) => n + item.qty, 0);
}

module.exports = { itemCount };
