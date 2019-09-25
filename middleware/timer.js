const util = require('util');
const Products = require('../products/products-model');

const setTimeoutPromise = util.promisify(setTimeout);

module.exports = id => {
    console.log('timer 4: ', id);
    setTimeoutPromise(1000 * 10, id).then((id) => {
        const req = { active: false };
        console.log('timer 10: ', req);
        console.log(id);
        Products.update(id, req);
        // value === 'foobar' (passing values is optional)
        // This is executed after about 40 milliseconds.
    });

    // Products.findBy(id)
    //     .then(product => {
    //         const req = { active: false };

    //         return setTimeout(() => {Products.update(product.id, req)}, 1000 * 10);
    //     });
};
