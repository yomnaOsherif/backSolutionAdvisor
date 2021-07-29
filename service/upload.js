class UploadService{

    async upload(req, res, next){
        const file = req.file
        if (!file) {
          const error = new Error('Please upload a file')
          error.httpStatusCode = 400
          return next(error)
        }
          res.send(file)
    }

    async cloudUpload(){
        console.log(req.file);
        const docReceived = req.body
        const namee= req.body.name
        const newFile = new File({docReceived});
        // When you have your own Client ID and secret, put down their values here:
        console.log(newFile);
        var creds = require("../config/keys").YOUR_GOOGLE_JSON_KEY
        const processFile = require("./middleware");
        const { format } = require("util");
        const { Storage } = require("@google-cloud/storage");
        const storage = new Storage({ keyFilename: creds });
        const bucket = storage.bucket("solution_advisor_bucket");
    
        // Create a new blob in the bucket and upload the file data.
        const blob = bucket.file(newFile.name);
        console.log(blob);
        const blobStream = blob.createWriteStream({resumable: false});
        blobStream.on("error", (err) => {
            res.status(500).send({ message: err.message });
        });
        blobStream.on("finish", async (data) => {
            // Create URL for directly file access via HTTP.
            const publicUrl = format(`https://storage.googleapis.com/${bucket.name}/${blob.name}`);
            try {
                // Make the file public
                await bucket.file(req.file.originalname).makePublic();
            }
            catch {
                return res.status(500).send({
                    message:
                    `Uploaded the file successfully: ${req.file.originalname}, but public access is denied!`,
                    url: publicUrl,
                });
            }
            res.status(200).send({
                message: "Uploaded the file successfully: " + req.file.originalname,
                url: publicUrl,
            });
        });
        blobStream.end(req.file.buffer);
    }
}
module.exports = UploadService;