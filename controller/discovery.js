const express = require("express");
const router = express.Router();
const DiscoveryV1 = require('ibm-watson/discovery/v1');
const { IamAuthenticator } = require('ibm-watson/auth');



router.get("/", (req, res));

module.exports = router;
