const util = require('util');
const Products = require('../products/products-model');

const setTimeoutPromise = util.promisify(setTimeout);

module.exports = id => {
    console.log('timer 4: ', id);
    setTimeoutPromise(1000 * 10, id).then(async (id) => {
        const req = { active: false };
        console.log('timer 10: ', req);
        console.log(id);
        await Products.update(id, req);
    });
};
