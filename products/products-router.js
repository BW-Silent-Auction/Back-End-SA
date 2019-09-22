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

router.post('/', (req, res) => {
    const { seller_id, description, starting_price } = req.body;

    if (!seller_id || !description || !starting_price) {
        res.status(400).json({ error: 'Please provide the proper body with the request' })
    } else {
        Products.add(req.body)
            .then(success => res.status(201).json(success))
            .catch(err => res.status(500).json(err));
    };
});

router.delete('/:id', (req, res) => {
    const { id } = req.params;
    console.log(id);

    Products.remove(id)
        .then(success => {
            if (success === 1) {
                res.status(200).json({ message: `Succesfully deleted the product with the ID: ${id}` });
            } else {
                res.status(500).json({ error: 'Internal error' });
            };
        })
        .catch(err => res.status(500).json(err));
});

router.put('/:id', (req, res) => {
    const { id } = req.params;

    if (req.body.created_at || req.body.id || req.body.seller_id) {
        res.status(401).json({ error: 'Those fields are not editable' })
    } else {
        Products.update(id, req.body)
            .then(success => res.status(200).json(success))
            .catch(err => res.status(500).json(err));
    };
});

module.exports = router;
