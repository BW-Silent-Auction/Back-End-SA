const express = require('express');
const bcrypt = require('bcryptjs');

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

router.post('/register', (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        res.status(400).json({ error: 'Please provide the proper body with the request' })
    } else {
        hash = bcrypt.hashSync(password);
        req.body.password = hash;

        Buyers.add(req.body)
            .then(success => res.status(201).json(success))
            .catch(err => res.status(200).json(err));
    };
});

router.post('/login', (req, res) => {

});

module.exports = router;
