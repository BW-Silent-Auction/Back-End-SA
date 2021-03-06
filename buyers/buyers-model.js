const db = require('../data/db-config');

module.exports = {
    find,
    findBy,
    logIn,
    findById,
    add,
    update,
    remove,
};

function find() {
    return db('buyers')
        .select('id', 'username', 'email', 'first_name', 'last_name');
};

function findBy(filter) {
    return db('buyers')
        .select('id', 'username', 'email', 'first_name', 'last_name')
        .where(filter);
};

function logIn(filter) {
    return db('buyers')
        .where(filter);
};

function findById(id) {
    return db('buyers')
        .where({ id })
        .select('id', 'username', 'email', 'first_name', 'last_name')
        .first();
};

function add(buyer) {
    return db('buyers')
        .insert(buyer)
        .returning('id')
        .then(id => {
            return findById(id[0]);
        });
};

function update(id, changes) {
    return db('buyers')
        .where({ id })
        .update(changes);
};

function remove(id) {
    return db('users')
        .where({ id })
        .del();
};
