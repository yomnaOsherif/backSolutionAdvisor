const express = require("express");
const router = express.Router();
const DiscoveryV1 = require('ibm-watson/discovery/v1');
const { IamAuthenticator } = require('ibm-watson/auth');
const File = require("../models/Docs");
const pdfUtil = require('pdf-to-text');
const pdf_path = "/Users/yomnasherif/Desktop/OCRTRIAL-1.pdf"
var queryy = ""
var exportedData = ""

const discovery = new DiscoveryV1({
  version: '2019-04-30',
  authenticator: new IamAuthenticator({
    apikey: 'zxIfLbDWvLj6bGTg7v7wr4pJ1RGpJlfyge4T-mSLdTRq',
  }),
serviceUrl: 'https://api.eu-de.discovery.watson.cloud.ibm.com/instances/f014925c-f2b8-4b02-ab32-3efcc1cd427d',
disableSslVerification: true

});

router.get("/rec", async (req, res) => {
  //const newFile = req.body;

  pdfUtil.pdfToText(pdf_path, function(err, data) {
    if (err) throw(err);
    //console.log(data); //print all text 
    exportedData = data
    console.log(exportedData);
    if (exportedData.includes("Multicloud")){
    console.log('here')
    queryy = 'question:"accelerate delivery"|question:"Seeking better control and monitor across many cloud platforms"|question:"gain operational business insights."'}
    else if (exportedData.includes("integration"))
    queryy = 'question:"enormously complex web of integrations"|question:"Information was siloed"|question:"(CI/CD) pipeline"'
    else 
     queryy= "empty"


    console.log(queryy);
  });


 
//})



//router.get("/rec", async (req, res) => {
//             query:'question:"enormously complex web of integrations"|question:"Information was siloed"|question:"(CI/CD) pipeline"',
 
//


    const queryParams = {
        environmentId: 'e6d028cf-884a-4004-9131-7bae292ed0d9',
        collectionId: 'd2c0c8dc-4941-4667-855c-7f28f0baaf56',
        query: queryy,
        type: "term",
        field: "answer",
        count:1
        
      };
      
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
