const express = require('express');
const Sellers = require('./serllers-model');

const router = express.Router();

router.get('/', (req, res) => {
    Sellers.find()
        .then(success => res.status(200).json(success))
        .catch(err => res.status(500).json(err))
});

router.get('/:id', (req, res) => {
    const { id } = req.params;
    
    Sellers.findById(id)
        .then(success => res.status(200).json(success))
        .catch(err => res.status(500).json(err));
});

module.exports = router;
