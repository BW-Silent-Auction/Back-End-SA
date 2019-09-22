
exports.seed = function(knex) {
  return knex('buyers').truncate()
    .then(function () {
      return knex('buyers').insert([
        { username: "test-buyer-1", password: "test", email: "test1@test.com" },
        { username: "test-buyer-2", password: "test", email: "test2@test.com" },
        { username: "test-buyer-3", password: "test", email: "test3@test.com" },
        { username: "test-buyer-4", password: "test", email: "test4@test.com" },
        { username: "test-buyer-5", password: "test" },
        { username: "test-buyer-6", password: "test" },
        { username: "test-buyer-7", password: "test" },
        { username: "test-buyer-8", password: "test" },
      ]);
    });
};
