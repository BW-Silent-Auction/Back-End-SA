
exports.seed = function(knex) {
  return knex('sellers').truncate()
    .then(function () {
      return knex('sellers').insert([
        { username: "test-seller-1", password: "test", email: "test1@test.com" },
        { username: "test-seller-2", password: "test", email: "test2@test.com" },
        { username: "test-seller-3", password: "test" },
      ]);
    });
};
