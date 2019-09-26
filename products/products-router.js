const express = require('express');
const parser = require('../config/cloudinary-config');
const Products = require('./products-model');
const Bids = require('./bids-model');
const timer = require('../middleware/timer');

const router = express.Router();

router.get('/', (req, res) => {
    Products.find()
        .then(success => res.status(200).json(success))
        .catch(err => res.status(500).json(err));
});

router.get('/:id', (req, res) => {
    const { id } = req.params;
    
    Products.findById(id)
        .then(success => res.status(200).json(success[0]))
        .catch(err => res.status(500).json(err));
});

router.post('/', parser, (req, res) => {
    const { seller_id, title, description, starting_price, image, duration } = req.body;

    if (!seller_id || !title || !description || !starting_price || !duration) {
        res.status(400).json({ error: 'Please provide the proper body with the request' });
    } else if (image === '') {
        Products.add(req.body)
        .then(success => {
            res.status(201).json(success[0]);
            timer(success[0].duration, success[0].id);
        })
        .catch(err => res.status(500).json(err));
    } else {
        req.body.image = req.file.url;
    
        Products.add(req.body)
            .then(success => {
                res.status(201).json(success[0]);
                timer(success[0].duration, success[0].id);
            })
            .catch(err => res.status(500).json(err));
    }
});

router.delete('/:id', (req, res) => {
    const { id } = req.params;

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

router.put('/:id', parser, (req, res) => {
    const { id } = req.params;

    if (req.body.created_at || req.body.id || req.body.seller_id) {
        res.status(400).json({ error: 'Those fields are not editable' });
    } else {
        req.body.image = req.file.url;

        Products.update(id, req.body)
            .then(success => res.status(200).json(success))
            .catch(err => res.status(500).json(err));
    };
});

router.get('/:id/bids', (req, res) => {
    const { id } = req.params;

    Bids.find(id)
        .then(success => {
            if (success && success.length) {
                res.status(200).json(success)
            } else {
                res.status(404).json({ error: 'The product with the provided ID does not exist' });
            };
        })
        .catch(err => res.status(500).json(err));
});

router.post('/:id/bids', (req, res) => {
    req.body.product_id = req.params.id;
    
    const { buyer_id, bid_amount } = req.body;

    if (!buyer_id || !bid_amount) {
        res.status(400).json({ error: 'Please include a valid buyer_id and bid_amount with the request' });
    } else {
        Bids.add(req.body)
            .then(success => res.status(201).json(success))
            .catch(err => res.status(500).json(err));
    };
});

module.exports = router;


router.post('/', parser, (req, res) => {
    const { seller_id, title, description, starting_price, duration } = req.body;

    if (!seller_id || !title || !description || !starting_price || !duration) {
        res.status(400).json({ error: 'Please provide the proper body with the request' });
    } else {
        req.body.image = req.file.url;

        Products.add(req.body)
            .then(success => {
                res.status(201).json(success[0]);
                timer(success[0].duration, success[0].id);
            })
            .catch(err => res.status(500).json(err));
    };
});
