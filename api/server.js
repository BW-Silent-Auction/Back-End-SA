const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const sellersRouter = require('../sellers/sellers-router');
const buyersRouter = require('../buyers/buyers-router');
const productsRouter = require('../products/products-router');
const restricted = require('../middleware/restricted');

const server = express();

server.use(express.json());
server.use(helmet());
server.use(cors());

server.get('/', (req, res) => {
    res.send({ api: 'up' })
});

server.use('/api/sellers', sellersRouter);
server.use('/api/buyers', buyersRouter);
server.use('/api/products', restricted, productsRouter);

module.exports = server;
