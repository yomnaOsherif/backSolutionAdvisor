
const File = require("../models/Docs");
const pdfUtil = require('pdf-to-text');
const path = require('path');
const pdf_path = "ABC_Company.pdf";
var queryy = ""
var exportedData = ""

const pdf =  path.join(__dirname, pdf_path);
console.log(pdf);
  pdfUtil.pdfToText(pdf, function(err, data) {
   if (err) throw(err);
   console.log(data); //print all text 
   exportedData = data
   console.log(exportedData);

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