
exports.seed = function(knex) {
  return knex('sellers').del()
    .then(function () {
      return knex('sellers').insert([
        { username: "test-seller-1", password: "test", email: "test1@test.com", first_name: "Alex", last_name: "Gordon" },
        { username: "test-seller-2", password: "test", email: "test2@test.com", first_name: "John", last_name: "Doe" },
        { username: "test-seller-3", password: "test", email: "test3@test.com", first_name: "Edward", last_name: "Nigma" },
      ]);
    });
};
