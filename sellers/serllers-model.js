const db = require('../data/db-config');

module.exports = {
    find,
    findBy,
    findById,
    add,
    update,
    remove,
};

function find() {
    return db('sellers');
};

function findBy(filter) {
    return db('sellers')
        .where(filter);
};

function findById(id) {
    return db('sellers')
        .where({ id })
        .first();
};

function add(seller) {
    return db('sellers')
        .insert(seller)
        .then(id => {
            return findById(id[0])
        });
};

function update(id, changes) {
    return db('sellers')
        .where({ id })
        .update(changes)
};

function remove(id) {
    return db('users')
        .where({ id })
        .del();
};
