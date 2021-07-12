const express = require('express');
const userModel = require("../models/User");
const jwt = require("jsonwebtoken");
const tokenKey = require("../config/keys").secretOrKey;
const bcrypt = require("bcrypt");

const UserService = require('../service/user');
const userService = new UserService(userModel, jwt, tokenKey, bcrypt);

const router = express.Router();
module.exports = app => {
    app.use('/api/users', router);
    router.get("/", userService.list.bind(userService));
    router.post('/register', userService.register.bind(userService));
    router.post("/login", userService.login.bind(userService));
    router.get("/:id", userService.get.bind(userService));
    router.put('/update/:id', userService.update.bind(userService));
}



