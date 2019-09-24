const db = require('../data/db-config');

module.exports = {
    find,
    findBy,
    findById,
    findPostsBySeller,
    add,
    update,
    remove,
};

function find() {
    return db('sellers')
    .select('id', 'username', 'email', 'first_name', 'last_name');
};

function findBy(filter) {
    return db('sellers')
    .select('id', 'username', 'email', 'first_name', 'last_name')
        .where(filter);
};

function findById(id) {
    return db('sellers')
        .select('id', 'username', 'email', 'first_name', 'last_name')
        .where({ id })
        .first();
};

function findPostsBySeller(id) {
    return db('products')
        .where({ seller_id: id });
};

function add(seller) {
    return db('sellers')
        .insert(seller)
        .returning('id')
        .then(id => {
            return findById(id[0]);
        });
};

function update(id, changes) {
    return db('sellers')
        .where({ id })
        .update(changes);
};

function remove(id) {
    return db('users')
        .where({ id })
        .del();
};
