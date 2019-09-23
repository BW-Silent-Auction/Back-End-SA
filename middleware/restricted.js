const jwt = require('jsonwebtoken');
const secret = require('../config/secrets');

module.exports = (req, res, next) => {
    const token = req.headers.authorization;

    if (!token) {
        res.status(400).json({ error: 'No credentials provided' })
    } else {
        jwt.verify(token, secret.jwtSecret, (err, decodedToken) => {
            if (err) {
                res.status(401).json({ error: 'You shall not pass!' })
            } else {
                req.user = { username: decodedToken.username }
                next();
            };
        });
    };
};
