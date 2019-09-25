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
        .where(filter)
};

function findById(id) {
    return db('products')
        .where({ id })

        .then(async product => {
            product[0].bids = await db('product_bids').where({ product_id: product[0].id });

            return product
        });
};

function add(product) {
    return db('products')
        .insert(product)
        .returning('id')
        .then(id => {
            return findById(id[0])
        });
};

function update(id, changes) {
    return db('products')
        .where({ id })
        .update(changes)
};

function remove(id) {
    return db('products')
        .where({ id })
        .del();
};
