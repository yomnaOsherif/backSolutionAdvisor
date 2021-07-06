const express = require("express");
const router = express.Router();
const DiscoveryV1 = require('ibm-watson/discovery/v1');
const { IamAuthenticator } = require('ibm-watson/auth');
const File = require("../models/Docs");
const pdfUtil = require('pdf-to-text');
const pdf_path = "/Users/yomnasherif/Desktop/OCRTRIAL-1.pdf"
const pdf_path2 = "/Users/yomnasherif/Desktop/ABC Company.pdf"
const pdf_path3 = "/Users/yomnasherif/Desktop/XYZ Company.pdf"
var queryy = ""
var exportedData = ""

//discovery instance setup
const discovery = new DiscoveryV1({
  version: '2019-04-30',
  authenticator: new IamAuthenticator({
    apikey: 'zxIfLbDWvLj6bGTg7v7wr4pJ1RGpJlfyge4T-mSLdTRq',
  }),
serviceUrl: 'https://api.eu-de.discovery.watson.cloud.ibm.com/instances/f014925c-f2b8-4b02-ab32-3efcc1cd427d',
disableSslVerification: true

});


//query function
router.get("/rec", async (req, res) => {
/*pdfToText extracts text from a pdf file and stores it in data field
exportedData is created globally and assigned 'data' so i can use the 
extracted data outside pdfToText function
*/

  pdfUtil.pdfToText(pdf_path3, function(err, data) {
    if (err) throw(err);
    //console.log(data); //print all text 
    exportedData = data
    console.log(exportedData);
/* the if condition parses extracted data and looks for text that can identify cloud pak to use.
It then assigns the var queryy the statement to send later on with the discovery query 
*/
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
    router.post("/doc", async (req, res) => {
      const file = req.body
    const newFile = new File({
        file
    });

    const addDocumentParams = {
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
})
    module.exports = router;
