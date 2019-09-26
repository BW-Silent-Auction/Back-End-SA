const express = require('express');
const bcrypt = require('bcryptjs');

const Buyers = require('./buyers-model');
const restricted = require('../middleware/restricted');
const generateToken = require('../auth/generateToken');

const router = express.Router();

router.get('/', restricted, (req, res) => {
    Buyers.find()
        .then(success => res.status(200).json(success))
        .catch(err => res.status(500).json(err));
});

router.get('/:id', restricted, (req, res) => {
    const { id } = req.params;
    
    Buyers.findById(id)
        .then(success => res.status(200).json(success))
        .catch(err => res.status(500).json(err));
});

router.post('/register', (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        res.status(400).json({ error: 'Please provide the proper body with the request' });
    } else {
        hash = bcrypt.hashSync(password);
        req.body.password = hash;

        Buyers.add(req.body)
            .then(success => res.status(201).json(success))
            .catch(err => res.status(200).json(err));
    };
});

router.post('/login', (req, res) => {
    let { username, password } = req.body;

    if (!username || !password) {
        res.status(400).json({ error: 'Please provide the proper body with your request' });
    } else {
        Buyers.logIn({ username })
            .first()
            .then(buyer => {
                if (buyer && bcrypt.compareSync(password, buyer.password)) {
                    const token = generateToken(buyer);
                    delete buyer.password;
                    res.status(200).json({ token: token, user: buyer });
                } else {
                    res.status(401).json({ error: 'Invalid crednetials' });
                };
            });
    };
});

router.delete('/:id', restricted, (req, res) => {
    const { id } = req.params;

    Buyers.remove(id)
        .then(success => res.status(200).json(success))
        .catch(err => res.status(500).json(err));
});

module.exports = router;
