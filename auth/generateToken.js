const jwt = require('jsonwebtoken');
const secret = require('../config/secrets');

module.exports = user => {
    const payload = {
        username: user.username,
    };
    const options = {
        expiresIn: '1h',
    };

    return jwt.sign(payload, secret.jwtSecret, options);
};
