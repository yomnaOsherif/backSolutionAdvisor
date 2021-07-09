const express = require("express");
var multer  = require('multer')
var upload = multer({ dest: 'uploads/' })
const router = express.Router();
const DiscoveryV1 = require('ibm-watson/discovery/v1');
const { IamAuthenticator } = require('ibm-watson/auth');
const File = require("../models/Docs");
//const pdfUtil = require('pdf-to-text');
const pdf_path = "/Users/yomnasherif/Desktop/OCRTRIAL-1.pdf"
const pdf_path2 = "/Users/yomnasherif/Desktop/ABC Company.pdf"
const pdf_path3 = "/Users/yomnasherif/Desktop/XYZ Company.pdf"
const pdf_url="https://cdn.bytescout.com/source-code-samples/PDF-co-Web-API-JavaScript-Convert-PDF-To-Text-From-URL-(Node-js).pdf"
var queryy = ""
var exportedData = ""
var http = require('http');
const { timeStamp } = require("console");
var clientId = "FREE_TRIAL_ACCOUNT";
var clientSecret = "PUBLIC_SECRET";
//discovery instance setup
const discovery = new DiscoveryV1({
  version: '2019-04-30',
  authenticator: new IamAuthenticator({
    apikey: 'zxIfLbDWvLj6bGTg7v7wr4pJ1RGpJlfyge4T-mSLdTRq',
  }),
serviceUrl: 'https://api.eu-de.discovery.watson.cloud.ibm.com/instances/f014925c-f2b8-4b02-ab32-3efcc1cd427d',
disableSslVerification: true

});



// app.post('/profile', upload.single('avatar'), function (req, res, next) {
//   // req.file is the `avatar` file
//   // req.body will hold the text fields, if there were any
// })


// TODO: Specify the URL of your small PDF document (less than 1MB and 10 pages)
// To extract text from bigger PDf document, you need to use the async method.


//query function
/*router.get("/rec", async (req, res) => {
/*pdfToText extracts text from a pdf file and stores it in data field
exportedData is created globally and assigned 'data' so i can use the 
extracted data outside pdfToText function
*/
//const newURL= url.parse(options.path).pathname    

  //console.log(newURL)
  //pdfUtil.pdfToText(newURL, function(err, data) {
  //  if (err) throw(err);
  //  console.log(data); //print all text 
  //  exportedData = data
  //  console.log(exportedData);
/* the if condition parses extracted data and looks for text that can identify cloud pak to use.
It then assigns the var queryy the statement to send later on with the discovery query 

    if (exportedData.includes("Multicloud")){
    console.log('here')
    queryy = 'question:"accelerate delivery"|question:"Seeking better control and monitor across many cloud platforms"|question:"gain operational business insights."'}
    else if (exportedData.includes("integration"))
    queryy = 'question:"enormously complex web of integrations"|question:"Information was siloed"|question:"(CI/CD) pipeline"'
    else if (exportedData.includes("data")|exportedData.includes("dashboard"))
    queryy = 'question:"Dashboard to provide visibility"|question:"data collection method"|question:"queries"'
    else if (exportedData.includes("manual")|exportedData.includes("workflow"))
    queryy = 'question:"Manual"|question:"workflow"|question:"repetitive"'
    else 
     queryy= "empty"


    console.log(queryy);
  });
});*/


/*
//parameters required by discovery to send query
    const queryParams = {
        environmentId: 'e6d028cf-884a-4004-9131-7bae292ed0d9',
        collectionId: 'd2c0c8dc-4941-4667-855c-7f28f0baaf56',
        query: queryy,
        type: "term",
        field: "answer",
        count: 1
        
      };
      //function that sends query and returns response including cloud pak recommendation
      discovery.query(queryParams)
        .then(queryResponse => {
          console.log(JSON.stringify(queryResponse, null,2));
          res.json({ data: queryResponse })

        })
        .catch(err => {
          console.log('error:', err);
        });

    })

*/

    /*const deleteDocumentParams = {
      environmentId: 'e6d028cf-884a-4004-9131-7bae292ed0d9',
      collectionId: 'd2c0c8dc-4941-4667-855c-7f28f0baaf56',
      documentId: '6718aabf6b0174c485b20417bc4158df',
    };
    
    discovery.deleteDocument(deleteDocumentParams)
      .then(deleteDocumentResponse => {
        console.log(JSON.stringify(deleteDocumentResponse, null, 2));
      })
      .catch(err => {
        console.log('error:', err);
      });*/
    
/*function to upload new document to discovery 
It saves file uploaded in a const named newFile to add to params
*/
    router.post("/doc", upload.single("myFile") ,async (req, res) => {
      console.log(req.file);
    //   const docReceived = req.body
    //   //const namee= req.body.name
    // const newFile = new File({
    //   docReceived
    // });

// // When you have your own Client ID and secret, put down their values here:
// console.log(newFile);
// var creds = require("../config/keys").YOUR_GOOGLE_JSON_KEY
// const processFile = require("./middleware");
// const { format } = require("util");
// const { Storage } = require("@google-cloud/storage");
// const storage = new Storage({ keyFilename: creds });
// const bucket = storage.bucket("solution_advisor_bucket");

// ////
//     // Create a new blob in the bucket and upload the file data.
//     const blob = bucket.file(newFile.name);
//     console.log(blob);

//     const blobStream = blob.createWriteStream({
//       resumable: false,
//     });
//     blobStream.on("error", (err) => {
//       res.status(500).send({ message: err.message });
//     });

//     blobStream.on("finish", async (data) => {
//       // Create URL for directly file access via HTTP.
//       const publicUrl = format(
//         `https://storage.googleapis.com/${bucket.name}/${blob.name}`
//       );
//       try {
//         // Make the file public
//         await bucket.file(req.file.originalname).makePublic();
//       } catch {
//         return res.status(500).send({
//           message:
//             `Uploaded the file successfully: ${req.file.originalname}, but public access is denied!`,
//           url: publicUrl,
//         });
//       }

//       res.status(200).send({
//         message: "Uploaded the file successfully: " + req.file.originalname,
//         url: publicUrl,
//       });
//     });
//     blobStream.end(req.file.buffer);

});

/*const {Storage} = require('@google-cloud/storage');
const googleCloudStorage = new Storage({
    projectId: 'instant-droplet-319114',
    keyFilename: creds
});
const bucket = googleCloudStorage.bucket('solution_advisor_bucket');
const file = bucket.file(newFile);
const destFileName = 'File upload trial' + Date.now();
*/
/*
const { Storage } = require('@google-cloud/storage');
const storage = new Storage({ keyFilename: creds });
// Replace with your bucket name and filename.
const bucketname = 'solution_advisor_bucket';
const filename = 'FileTrial' + Date.now();

const res = await storage.bucket(bucketname).upload('./' + filename);
// `mediaLink` is the URL for the raw contents of the file.
const url = res[0].metadata.mediaLink;

// Need to make the file public before you can access it.
await storage.bucket(bucketname).file(filename).makePublic();

// Make a request to the uploaded URL.
const axios = require('axios');
const pkg = await axios.get(url).then(res => res.data);
pkg.name; // 'masteringjs.io'
*/


/*
var URLtoSend = ""
 file.getSignedUrl({
  action: 'read',
  expires: '03-09-2491'
}).then(signedUrls => {
  // signedUrls[0] contains the file's public URL
  console.log("this is the signed URL"+ signedUrls[0])
  URLtoSend = signedUrls[0]
});
/*
console.log(URLtoSend +"im hereeee")
  var url = URLtoSend + '';


var options = {
    hostname: "api.whatsmate.net",
    port: 80,
    path: '/v1/pdf/extract?url=' + url,
    method: "GET",
    headers: {
        "X-WM-CLIENT-ID": clientId,
        "X-WM-CLIENT-SECRET": clientSecret,
    }
};

var request = new http.ClientRequest(options);
request.end();
var exportedData= ""
request.on('response', function (response) {
    console.log('Status code: ' + response.statusCode);
    response.setEncoding('utf8');
    response.on('data', function (chunk) {
        console.log('Extracted text:');
        exportedData = chunk;
        console.log(exportedData);
    });

    if (exportedData.includes("Multicloud")){
      console.log('here')
      queryy = 'question:"accelerate delivery"|question:"Seeking better control and monitor across many cloud platforms"|question:"gain operational business insights."'}
      else if (exportedData.includes("integration"))
      queryy = 'question:"enormously complex web of integrations"|question:"Information was siloed"|question:"(CI/CD) pipeline"'
      else if (exportedData.includes("data")|exportedData.includes("dashboard"))
      queryy = 'question:"Dashboard to provide visibility"|question:"data collection method"|question:"queries"'
      else if (exportedData.includes("manual")|exportedData.includes("workflow"))
      queryy = 'question:"Manual"|question:"workflow"|question:"repetitive"'
      else 
       queryy= "empty"
  
  
      console.log(queryy);


       /* const addDocumentParams = {
      environmentId: 'e6d028cf-884a-4004-9131-7bae292ed0d9',
      collectionId: 'd2c0c8dc-4941-4667-855c-7f28f0baaf56',
      file: newFile
    };
    
  discovery.addDocument(addDocumentParams)
  .then(documentAccepted => {
    console.log(JSON.stringify(documentAccepted, null, 2));
    res.json({ data: documentAccepted })

  })
  .catch(err => {
    console.log('error:', err);
  });

});*/



//})
    module.exports = router;
