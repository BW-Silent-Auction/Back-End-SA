const Products = require('../products/products-model');

module.exports = id => {
    console.log('timer 4: ', id);
    Products.findBy(id)
        .then(product => {
            const req = { active: false };

            return setTimeout(() => {Products.update(product.id, req)}, 1000 * 10);
        });
};
