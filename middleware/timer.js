const Products = require('../products/products-model');

module.exports = product => {
    const { id } = product;
    console.log(id);
    Products.findBy(id)
        .then(product => {
            const req = { active: false };

            setTimeout(() => {Products.update(product.id, req)}, 1000 * 10)
        });
};
