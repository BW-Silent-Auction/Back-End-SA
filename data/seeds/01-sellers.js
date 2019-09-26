const bcrypt= require('bcryptjs');
const password = 'password';

exports.seed = function(knex) {
  return knex('sellers').del()
    .then(function () {
      return knex('sellers').insert([
        { username: "alex", password: bcrypt.hashSync(password), email: "alex@test.com", first_name: "Alex", last_name: "Gordon" },
        { username: "cameron", password: bcrypt.hashSync(password), email: "cameron@test.com", first_name: "Cameron", last_name: "Alvarado" },
        { username: "dominique", password: bcrypt.hashSync(password), email: "dominique@test.com", first_name: "Dominique", last_name: "Maack" },
        { username: "chao", password: bcrypt.hashSync(password), email: "chao@test.com", first_name: "Chao", last_name: "Ji" },
      ]);
    });
};
