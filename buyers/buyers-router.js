const express = require('express');
const Buyers = require('./buyers-model');

const router = express.Router();

router.get('/', (req, res) => {
    Buyers.find()
        .then(success => res.status(200).json(success))
        .catch(err => res.status(500).json(err))
});

router.get('/:id', (req, res) => {
    const { id } = req.params;
    
    Buyers.findById(id)
        .then(success => res.status(200).json(success))
        .catch(err => res.status(500).json(err));
});

module.exports = router;
