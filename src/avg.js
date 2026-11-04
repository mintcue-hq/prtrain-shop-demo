'use strict';

// Average unit price across cart lines (0 for an empty cart).
function avgUnitPrice(items) {
  const units = items.reduce((n, i) => n + i.qty, 0);
  if (units === 0) return 0;
  return Math.round(items.reduce((s, i) => s + i.price * i.qty, 0) / units);
}

module.exports = { avgUnitPrice };
