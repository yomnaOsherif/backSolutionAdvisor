const express = require('express');
const user = require('../controller/user');
const upload = require('../controller/upload');

const router = express.Router();
user(router);
upload(router);

module.exports = router;