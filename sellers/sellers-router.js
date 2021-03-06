const express = require('express');
const bcrypt = require('bcryptjs');

const Sellers = require('./serllers-model');
const restricted = require('../middleware/restricted');
const generateToken = require('../auth/generateToken');

const router = express.Router();

router.get('/', restricted, (req, res) => {
    Sellers.find()
        .then(success => res.status(200).json(success))
        .catch(err => res.status(500).json(err));
});

router.get('/:id', restricted, (req, res) => {
    const { id } = req.params;

    Sellers.findById(id)
        .then(success => res.status(200).json(success))
        .catch(err => res.status(500).json(err));
});

router.get('/:id/auctions', restricted, (req, res) => {
    const { id } = req.params;

    Sellers.findPostsBySeller(id)
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

        Sellers.add(req.body)
            .then(success => res.status(201).json(success))
            .catch(err => res.status(500).json(err));
    };
});

router.post('/login', (req, res) => {
    let { username, password } = req.body;

    if (!username || !password) {
        res.status(400).json({ error: 'Please provide the proper body with your request' });
    } else {
        Sellers.logIn({ username })
            .first()
            .then(seller => {
                if (seller && bcrypt.compareSync(password, seller.password)) {
                    const token = generateToken(seller);
                    delete seller.password;
                    res.status(200).json({ token: token, user: seller });
                } else {
                    res.status(401).json({ error: 'Invalid credentials' });
                };
            });
    };
});

module.exports = router;
