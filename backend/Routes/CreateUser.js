const express = require('express')
const router = express.Router()
const User = require('../models/User')
const { body, validationResult } = require('express-validator');
router.post("/createuser", [
    body('email').isEmail(),
    body('password').isLength({ min: 5 }),
    body('name').isLength({ min: 3 })
], async (req, res) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ success,errors: errors.array() })
    }

    try {
        await User.create({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        })
        res.json({ success: true });
    }
    catch (error) {
        console.log(error)
        res.json({ success: false });
    }
})

router.post("/loginuser",[
    body('email').isEmail(),
    body('password').isLength({ min: 5 })
], async (req, res) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ success,errors: errors.array() })
    }

    let email = req.body.email
    try {
        let userData = await User.findOne({email});
        if(!userData){
            return res.status(400).json({errors: "Invalid login credentials"})
        }
        
        if(req.body.password !== userData.password){
            return res.status(400).json({errors: "Invalid login credentials"})
        }

        return res.json({ success: true })
    }
    catch (error) {
        console.log(error)
        res.json({ success: false });
    }
})

module.exports = router;