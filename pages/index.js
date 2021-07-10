const express = require('express');
const user = require('../controller/user');
const upload = require('../controller/upload');
const discovery = require('../controller/discovery');

const router = express.Router();
user(router);
upload(router);
discovery(router);

module.exports = router;