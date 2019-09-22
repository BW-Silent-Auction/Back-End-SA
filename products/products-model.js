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
    return db('products');
};

function findBy(filter) {
    return db('products')
        .where(filter);
};

function findById(id) {
    return db('products')
        .where({ id })
        .first();
};

function add(product) {
    return db('products')
        .insert(product)
        .then(id => {
            return getById(id[0])
        });
};

function update(id, changes) {
    return db('products')
        .where({ id })
        .update(changes)
};

function remove(id) {
    return db('users')
        .where({ id })
        .del();
};
