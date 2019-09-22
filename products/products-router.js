const express = require('express');
const Products = require('./products-model');

const router = express.Router();

router.get('/', (req, res) => {
    Products.find()
        .then(success => res.status(200).json(success))
        .catch(err => res.status(500).json(err))
});

router.get('/:id', (req, res) => {
    const { id } = req.params;
    
    Products.findById(id)
        .then(success => res.status(200).json(success))
        .catch(err => res.status(500).json(err));
});

module.exports = router;
