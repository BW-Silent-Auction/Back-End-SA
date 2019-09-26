
exports.seed = function(knex) {
  return knex('buyers').del()
    .then(function () {
      return knex('buyers').insert([
        { username: "alex", password: "password", email: "alex@test.com", first_name: "Alex", last_name: "Gordon" },
        { username: "cameron", password: "password", email: "cameron@test.com", first_name: "Cameron", last_name: "Alvarado" },
        { username: "dominique", password: "password", email: "dominique@test.com", first_name: "Dominique", last_name: "Maack" },
        { username: "chao", password: "password", email: "chao@test.com", first_name: "Chao", last_name: "Ji" },
        { username: "austen", password: "password", email: "austen@test.com", first_name: "Austen", last_name: "Allred" },
        { username: "steven", password: "password", email: "steven@test.com", first_name: "Steven", last_name: "Jefferson" },
        { username: "steve", password: "password", email: "steve@test.com", first_name: "Steve", last_name: "Moorehead" },
        { username: "ryan", password: "password", email: "ryan@test.com", first_name: "Ryan", last_name: "McLaughlin" },
        { username: "alexis", password: "password", email: "alexis@test.com", first_name: "Alexis", last_name: "Carr" },
        { username: "cam", password: "password", email: "cam@test.com", first_name: "Cam", last_name: "Perry" },
        { username: "john", password: "password", email: "jonathan@test.com", first_name: "Jonathan", last_name: "Taylor" },
        { username: "bigtimebuyer123", password: "password", email: "ryanh@test.com", first_name: "Ryan", last_name: "Hamblin" },
      ]);
    });
};
