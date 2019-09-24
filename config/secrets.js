
module.exports = {
    jwtSecret: process.env.JWT_SECRET || 'Silence is golden',
    environment: process.env.NODE_ENV,
};
