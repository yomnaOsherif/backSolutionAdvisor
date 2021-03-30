const express = require("express");
const mongoose = require("mongoose")
const bcrypt = require('bcrypt')
const User = require("../models/User");
const router = express.Router();


router.get("/", async (req, res) => {
    const users = await User.find()
    res.json({ data: users })
})

router.post('/register', async (req, res) => {
    const {
        name,
        email,
        password,
        phonenumber,
        role} = req.body
    const user = await User.findOne({ email })
    if (user) return res.status(400).json({ error: 'Email already exists' })

   const salt = bcrypt.genSaltSync(10)
   const hashedPassword = bcrypt.hashSync(password, salt)
    const newUser = new User({
        name,
        email,
        password:hashedPassword,
        phonenumber,
        role
    })
    newUser
        .save()
        .then(user => res.json({ data: user }))
        .catch(err => res.json({ error: 'Can not create user' }))
})

router.put('/update/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const user = await User.findById(id);
        if (!user) return res.status(404).send({ error: "user does not exist" });           
        User.updateOne({ _id: id }, { $set: req.body })
            .exec()
            .then(() => {
                res.json({ msg: "User updated successfully" });
            });
    } catch (error) {
        // We will be handling the error later
        console.log(error);
    }
});



module.exports = router;
