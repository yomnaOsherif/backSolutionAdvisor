const express = require('express');
const userModel = require("../models/User");
const jwt = require("jsonwebtoken");
const tokenKey = require("../config/keys").secretOrKey;


const UserService = require('../service/user');
const userService = new UserService(userModel, jwt, tokenKey);

const router = express.Router();
module.exports = app => {
    app.use('/api/users', router);
    router.get("/", userService.list);
    router.post('/register', userService.register);
    router.post("/login", userService.login);
    router.get("/:id", userService.get);
    router.put('/update/:id', userService.update );
}



