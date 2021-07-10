const {Storage} = require('@google-cloud/storage');
const googleCloudStorage = new Storage({
    projectId: 'instant-droplet-319114',
    keyFilename: creds
});

const bucket = googleCloudStorage.bucket('solution_advisor_bucket');
const file = bucket.file(newFile);
const destFileName = 'File upload trial' + Date.now();


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




var URLtoSend = ""
file.getSignedUrl({
  action: 'read',
  expires: '03-09-2491'
}).then(signedUrls => {
  // signedUrls[0] contains the file's public URL
  console.log("this is the signed URL"+ signedUrls[0])
  URLtoSend = signedUrls[0]
});

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
    }
);

if (exportedData.includes("Multicloud")){
    console.log('here')
    queryy = 'question:"accelerate delivery"|question:"Seeking better control and monitor across many cloud platforms"|question:"gain operational business insights."'
}
else if (exportedData.includes("integration"))
    queryy = 'question:"enormously complex web of integrations"|question:"Information was siloed"|question:"(CI/CD) pipeline"'
else if (exportedData.includes("data")|exportedData.includes("dashboard"))
    queryy = 'question:"Dashboard to provide visibility"|question:"data collection method"|question:"queries"'
else if (exportedData.includes("manual")|exportedData.includes("workflow"))
    queryy = 'question:"Manual"|question:"workflow"|question:"repetitive"'
else 
    queryy= "empty"
console.log(queryy);

const addDocumentParams = {
    environmentId: 'e6d028cf-884a-4004-9131-7bae292ed0d9',
    collectionId: 'd2c0c8dc-4941-4667-855c-7f28f0baaf56',
    file: newFile
};

discovery.addDocument(addDocumentParams)
.then(documentAccepted => {
    console.log(JSON.stringify(documentAccepted, null, 2));
    res.json({ data: documentAccepted })
}).catch(err => {
     console.log('error:', err);
    });
});