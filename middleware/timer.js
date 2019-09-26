const util = require('util');
const Products = require('../products/products-model');

const setTimeoutPromise = util.promisify(setTimeout);

module.exports = (duration, id) => {
    setTimeoutPromise(1000 * 60 * 60 * 24 * duration, id).then(async (id) => {
        const req = { active: false };
        await Products.update(id, req);
    });
};
