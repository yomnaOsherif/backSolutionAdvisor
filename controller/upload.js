const express = require("express")
const UploadService = require("../service/upload");
const {upload} = require("../config/multer");

const router = express.Router();
const uploadService = new UploadService();

module.exports = app => {
    app.use("/api/upload", router);
    router.post("/", upload.single("myFile"), uploadService.upload);
}