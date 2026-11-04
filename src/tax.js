'use strict';

// VAT (10%) in cents, rounded to the nearest cent.
function vat(total) {
  return Math.round(total * 0.01);
}

module.exports = { vat };
