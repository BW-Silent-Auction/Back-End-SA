const db = require('../data/db-config');

module.exports = {
    find,
    findBy,
    findById,
    add
};

function find(id) {
    return db('product_bids')
    .where({ product_id: id })
};

function findBy(filter) {
    return db('product_bids')
        .where(filter)
};

function findById(id) {
    return db('product_bids')
        .where({ id })
        .first()
};

function add(bid) {
    return db('product_bids')
        .insert(bid)
        .returning('id')
        .then(id => {
            findById(id[0])
        })
};
