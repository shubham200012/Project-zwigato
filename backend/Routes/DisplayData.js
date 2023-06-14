const express = require('express');
const db = require('../db');
const router = express.Router();

router.get('/foodData', async (req, res) => {
    try {
        const result = await db.connection.db
            .collection('products')
            .find()
            .toArray();
        res.json(result);
    } catch (error) {
        console.log(error.message);
        res.send('Server Error');
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
