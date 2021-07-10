const express = require("express")
const pdfUtil = require('pdf-to-text');
const DiscoveryService = require("../service/discovery");
const {discovery, queryConfig} = require("../config/discovery");

const router = express.Router();
const discoveryService= new DiscoveryService(discovery, queryConfig, pdfUtil);

module.exports = app => {
    app.use("/api/recommendation", router);
    router.get("/", discoveryService.recommend.bind(discoveryService));
}
