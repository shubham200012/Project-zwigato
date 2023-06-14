const express = require('express');
const db = require('../db');
const router = express.Router();

router.get('/foodData/:category', async (req, res) => {
    try {
        const category = req.params.category;
        let result;
        if (category === 'All') {
            result = await db.connection.db
                .collection('products')
                .find()
                .toArray();
        } else {
            result = await db.connection.db
                .collection('products')
                .find({ category })
                .toArray();
        }
        res.json(result);
    } catch (error) {
        console.log(error.message);
        res.send('Server Error');
    }
});

router.get('/foodData/product/:id', async (req, res) => {
    const productid = parseInt(req.params.id);
    const product = await db.connection.db
        .collection('products')
        .findOne({ productid });
    if (product) {
        res.json({
            status: 200,
            data: product,
        });
    } else {
        res.json({
            status: 404,
            message: 'Product not found',
        });
    }
});

router.post('/foodData', async (req, res) => {
    try {
        const result = await db.connection.db
            .collection('products')
            .insertOne(req.body);
        res.json(result);
    } catch (e) {
        console.log(e);
        res.send('error');
    }
});

module.exports = router;
