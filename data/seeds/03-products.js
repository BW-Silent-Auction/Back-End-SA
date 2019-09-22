
exports.seed = function(knex) {
  return knex('products').truncate()
    .then(function () {
      return knex('products').insert([
        { seller_id: 1, description: "Test seed for product with the id:1 from the seller with the id:1", starting_price: 19.95 },
        { seller_id: 1, description: "Test seed for product with the id:2 from the seller with the id:1", starting_price: 29.95 },
        { seller_id: 2, description: "Test seed for product with the id:3 from the seller with the id:2", starting_price: 39.95 },
        { seller_id: 2, description: "Test seed for product with the id:4 from the seller with the id:2", starting_price: 49.95 },
        { seller_id: 3, description: "Test seed for product with the id:5 from the seller with the id:3", starting_price: 59.95 },
        { seller_id: 3, description: "Test seed for product with the id:6 from the seller with the id:3", starting_price: 69.95 },
      ]);
    });
};
