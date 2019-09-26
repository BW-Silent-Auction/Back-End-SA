
exports.seed = function(knex) {
  return knex('sellers').del()
    .then(function () {
      return knex('sellers').insert([
        { username: "alex", password: "password", email: "alex@test.com", first_name: "Alex", last_name: "Gordon" },
        { username: "cameron", password: "password", email: "cameron@test.com", first_name: "Cameron", last_name: "Alvarado" },
        { username: "dominique", password: "password", email: "dominique@test.com", first_name: "Dominique", last_name: "Maack" },
        { username: "chao", password: "password", email: "chao@test.com", first_name: "Chao", last_name: "Ji" },
      ]);
    });
};
