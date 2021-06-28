const express = require("express");
const router = express.Router();
const DiscoveryV1 = require('ibm-watson/discovery/v1');
const { IamAuthenticator } = require('ibm-watson/auth');
const File = require("../models/Docs");


const discovery = new DiscoveryV1({
  version: '2019-04-30',
  authenticator: new IamAuthenticator({
    apikey: 'zxIfLbDWvLj6bGTg7v7wr4pJ1RGpJlfyge4T-mSLdTRq',
  }),
serviceUrl: 'https://api.eu-de.discovery.watson.cloud.ibm.com/instances/f014925c-f2b8-4b02-ab32-3efcc1cd427d',
disableSslVerification: true

});

router.get("/rec", async (req, res) => {



    const queryParams = {
        environmentId: 'e6d028cf-884a-4004-9131-7bae292ed0d9',
        collectionId: 'd2c0c8dc-4941-4667-855c-7f28f0baaf56',
        query:'question:"enormously complex web of integrations"|question:"Information was siloed"|question:"(CI/CD) pipeline"',
        type: "term",
        field: "answer",
        count: 1,
        
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
