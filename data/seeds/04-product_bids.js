
exports.seed = function(knex) {
  return knex('product_bids').del()
    .then(function () {
      return knex('product_bids').insert([
        { product_id: 1, buyer_id: 2, bid_amount: 124.95 },
        { product_id: 1, buyer_id: 6, bid_amount: 134.95 },
        { product_id: 1, buyer_id: 8, bid_amount: 144.95 },
        { product_id: 2, buyer_id: 3, bid_amount: 44.95 },
        { product_id: 2, buyer_id: 5, bid_amount: 49.95 },
        { product_id: 3, buyer_id: 1, bid_amount: 34.95 },
        { product_id: 3, buyer_id: 7, bid_amount: 44.95 },
        { product_id: 3, buyer_id: 8, bid_amount: 54.95 },
        { product_id: 4, buyer_id: 4, bid_amount: 34.95 },
        { product_id: 5, buyer_id: 2, bid_amount: 84.95 },
        { product_id: 6, buyer_id: 3, bid_amount: 64.95 },
        { product_id: 6, buyer_id: 1, bid_amount: 74.95 },
        { product_id: 7, buyer_id: 11, bid_amount: 34.95 },
        { product_id: 8, buyer_id: 10, bid_amount: 44.95 },
        { product_id: 9, buyer_id: 4, bid_amount: 24.95 },
        { product_id: 10, buyer_id: 12, bid_amount: 64.95 },
        { product_id: 10, buyer_id: 9, bid_amount: 74.95 },
      ]);
    });
};
