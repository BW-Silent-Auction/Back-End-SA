const db = require('../data/db-config');
const Products = require('../products/products-model');

module.exports = async product => {
    const { id } = product;
    await Products.findBy(id)
        .then(product => {
            const req = { active: false };

            setTimeout(() => {Products.update(product.id, req)}, 1000 * 60)
        });
};
