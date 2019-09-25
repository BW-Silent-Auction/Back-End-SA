
exports.seed = function(knex) {
  return knex('buyers').del()
    .then(function () {
      return knex('buyers').insert([
        { username: "test-buyer-1", password: "test", email: "test1@test.com", first_name: "Alfred", last_name: "Pennyworth" },
        { username: "test-buyer-2", password: "test", email: "test2@test.com", first_name: "Bruce", last_name: "Wayne" },
        { username: "test-buyer-3", password: "test", email: "test3@test.com", first_name: "Harvey", last_name: "Dent" },
        { username: "test-buyer-4", password: "test", email: "test4@test.com", first_name: "James", last_name: "Gordon" },
        { username: "test-buyer-5", password: "test", email: "test5@test.com", first_name: "Poison", last_name: "Ivy" },
        { username: "test-buyer-6", password: "test", email: "test6@test.com", first_name: "Ra's al", last_name: "Ghul" },
        { username: "test-buyer-7", password: "test", email: "test7@test.com", first_name: "Oswald", last_name: "Cobblepot" },
        { username: "test-buyer-8", password: "test", email: "test8@test.com", first_name: "Lucius", last_name: "Fox" },
      ]);
    });
};
