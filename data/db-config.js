const knex = require('knex');
const secret = require('../config/secrets');

const environment = secret.environment || 'development';

const config = require('../knexfile')[environment];

module.exports = knex(config);
