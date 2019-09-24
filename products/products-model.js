const db = require('../data/db-config');
const stream = require('stream');

module.exports = {
    find,
    findBy,
    findById,
    add,
    update,
    remove,
};

function find() {
    return db('products')
        .then(auctions => {
            auctions.map(auc => {
                if (auc.image == null) {
                    return auc;
                } else {
                    const readStream = new stream.PassThrough();
                    auc.image = Buffer.from(auc.image, base64);
                    readStream.end(auc.image);
                    return auc;
                };
            });
        });
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
