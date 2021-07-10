const util = require('util');
class DiscoveryService 
{
    constructor(discovery, discoveryQueryConfig, pdfToTextExtractor)
    {
        this.discovery = discovery;
        this.discoveryQueryConfig = discoveryQueryConfig;
        this.pdfToTextExtractor =  pdfToTextExtractor;
    }

    async query(req, res) {
        const {queryParams} = req.body;
        queryParams = queryParams ||  {
            environmentId: 'e6d028cf-884a-4004-9131-7bae292ed0d9',
            collectionId: 'd2c0c8dc-4941-4667-855c-7f28f0baaf56',
            query:'question:"enormously complex web of integrations"|question:"Information was siloed"|question:"(CI/CD) pipeline"',
            type: "term",
            field: "answer",
            count: 1,
            
          }; 
        this.discovery.query(queryParams)
        .then(queryResponse => {
          console.log(JSON.stringify(queryResponse, null,2));
        })
        .catch(err => {
          console.log('error:', err);
        });
    }
    
    async recommend(req, res){
        try{
            const {url} = req.query;
            console.log("Uploaded Path:", url);
            await this.extract(url);
            await this.getRecommendation(req, res)
        }
        catch(error){
            console.error(error);
            res.send(error);
        }
    }

    
    async extract(url){
        try{
            const pdfToText = util.promisify(this.pdfToTextExtractor.pdfToText);
            const textExtractFromPDF = await pdfToText(url); 
            console.log("Extract:", textExtractFromPDF)
            const query = this.createQuery(textExtractFromPDF);
            console.log("query:", query);
            this.discoveryQueryConfig.query = query;
        }
        catch(error)
        {
            console.log("error here");
            throw error;
        }
    }

    async getRecommendation(req, res)
    {
        try{
            const queryResponse = await this.discovery.query(this.discoveryQueryConfig);
            console.log(JSON.stringify(queryResponse, null,2));
            res.json({ data: queryResponse });
        }
        catch(error){
            console.log('error:', err);

        }
        
    }

    async deleteDocument(){
        const deleteDocumentParams = {
            environmentId: 'e6d028cf-884a-4004-9131-7bae292ed0d9',
            collectionId: 'd2c0c8dc-4941-4667-855c-7f28f0baaf56',
            documentId: '6718aabf6b0174c485b20417bc4158df',
        };
        try{
            const deletedDocumentResponse = await discovery.deleteDocument(deleteDocumentParams);
            console.log(JSON.stringify(deletedDocumentResponse, null, 2));
        }catch(err){
            console.log('error:', err);
        }
    }

    createQuery(textExtract){
        let query = "empty";
        if (textExtract.includes("Multicloud")){
            query = 'question:"accelerate delivery"|question:"Seeking better control and monitor across many cloud platforms"|question:"gain operational business insights."'
        }
        else if (textExtract.includes("integration")) {
            query = 'question:"enormously complex web of integrations"|question:"Information was siloed"|question:"(CI/CD) pipeline"'
        }
        else if (textExtract.includes("data")|textExtract.includes("dashboard")){
            query = 'question:"Dashboard to provide visibility"|question:"data collection method"|question:"queries"'
        }
        else if (textExtract.includes("manual")|textExtract.includes("workflow")){
            query = 'question:"Manual"|question:"workflow"|question:"repetitive"'
        }
        else {
            query = "empty";
        } 
        return query;
    }
}
module.exports = DiscoveryService;
/* 
const express = require("express");
var multer  = require('multer')
var upload = multer({ dest: 'uploads/' })
const router = express.Router();
const DiscoveryV1 = require('ibm-watson/discovery/v1');
const { IamAuthenticator } = require('ibm-watson/auth');
const File = require("../models/Docs");
const pdfUtil = require('pdf-to-text');
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
 */