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
    return db('buyers');
};

function findBy(filter) {
    return db('buyers')
        .where(filter);
};

function findById(id) {
    return db('buyers')
        .where({ id })
        .first();
};

function add(buyer) {
    return db('buyers')
        .insert(buyer)
        .then(id => {
            return findById(id[0])
        });
};

function update(id, changes) {
    return db('buyers')
        .where({ id })
        .update(changes)
};

function remove(id) {
    return db('users')
        .where({ id })
        .del();
};
