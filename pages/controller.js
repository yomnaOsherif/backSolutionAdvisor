const express = require("express")
var multer  = require('multer')
const upload = multer({ dest: 'uploads/' })
const router = express.Router();





// const UploadController = (router , upload) => {
    
   
// }
module.exports = app => { 
    app.use("/api/discoveryy", router)
    router.post("/doc", upload.single("myFile"), async(req, res) => { 
        console.log(req.file)
    }
)
}


// router.post("/doc", upload.single("myFile") ,async (req, res) => {
//     console.log(req.file);

// });