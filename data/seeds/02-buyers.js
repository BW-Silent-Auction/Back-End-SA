const bcrypt = require('bcryptjs');
const password = 'password';

exports.seed = function(knex) {
  return knex('buyers').del()
    .then(function () {
      return knex('buyers').insert([
        { username: "alex", password: bcrypt.hashSync(password), email: "alex@test.com", first_name: "Alex", last_name: "Gordon" },
        { username: "cameron", password: bcrypt.hashSync(password), email: "cameron@test.com", first_name: "Cameron", last_name: "Alvarado" },
        { username: "dominique", password: bcrypt.hashSync(password), email: "dominique@test.com", first_name: "Dominique", last_name: "Maack" },
        { username: "chao", password: bcrypt.hashSync(password), email: "chao@test.com", first_name: "Chao", last_name: "Ji" },
        { username: "austen", password: bcrypt.hashSync(password), email: "austen@test.com", first_name: "Austen", last_name: "Allred" },
        { username: "steven", password: bcrypt.hashSync(password), email: "steven@test.com", first_name: "Steven", last_name: "Jefferson" },
        { username: "steve", password: bcrypt.hashSync(password), email: "steve@test.com", first_name: "Steve", last_name: "Moorehead" },
        { username: "ryan", password: bcrypt.hashSync(password), email: "ryan@test.com", first_name: "Ryan", last_name: "McLaughlin" },
        { username: "alexis", password: bcrypt.hashSync(password), email: "alexis@test.com", first_name: "Alexis", last_name: "Carr" },
        { username: "cam", password: bcrypt.hashSync(password), email: "cam@test.com", first_name: "Cam", last_name: "Perry" },
        { username: "john", password: bcrypt.hashSync(password), email: "jonathan@test.com", first_name: "Jonathan", last_name: "Taylor" },
        { username: "bigtimebuyer123", password: bcrypt.hashSync(password), email: "ryanh@test.com", first_name: "Ryan", last_name: "Hamblin" },
      ]);
    });
};
