//import { Button } from "react-bootstrap";
//import TESTDOC from "../../assets/trial_upload.docx";

function discoveryPage() {

//const fs = require('fs');
//const IamIdentityV1 = require('ibm-platform-services/iam-identity/v1');
//const apikey= 'bs7LgHA7YE5zuLACXVbF9hE8wiazOHlCYa1zvolYb-qh'
//const serviceClient = IamIdentityV1.newInstance({discovery});
const DiscoveryV1 = require('ibm-watson/discovery/v1');
const { IamAuthenticator } = require('ibm-watson/auth');


const discovery = new DiscoveryV1({
  version: '2019-04-30',
  authenticator: new IamAuthenticator({
    apikey: 'zxIfLbDWvLj6bGTg7v7wr4pJ1RGpJlfyge4T-mSLdTRq',
  }),
  url: 'https://api.eu-de.discovery.watson.cloud.ibm.com/instances/f014925c-f2b8-4b02-ab32-3efcc1cd427d',
});

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
    console.log(JSON.stringify(queryResponse, null, 2));
  })
  .catch(err => {
    console.log('error:', err);
  });

/*const addDocumentParams = {
  environmentId: 'e6d028cf-884a-4004-9131-7bae292ed0d9',
  collectionId: 'd2c0c8dc-4941-4667-855c-7f28f0baaf56',
 // file: fs.createReadStream(TESTDOC),
};
*/
/*discovery.addDocument(addDocumentParams)
  .then(response => {
    const documentAccepted = response.result;
    console.log(JSON.stringify(documentAccepted, null, 2));
  })
  .catch(err => {
    console.log('error:', err);
  })
  discovery.addDocument({
    environmentId: 'e6d028cf-884a-4004-9131-7bae292ed0d9',
    collectionId: 'd2c0c8dc-4941-4667-855c-7f28f0baaf56',
    file: file,
    filename: doc }, (err, data) => {
    if (err) {
      // we got an error on this one doc, but keep loading the rest
      console.log('Add document error:');
      console.error(err);*/
      /*
      {discovery.query(queryParams)
  .then(queryResponse => {
    console.log(JSON.stringify(queryResponse, null, 2));
  })
  .catch(err => {
    console.log('error:', err);
  })}
      */

  return(
    <div>

    </div>
  );

}
export default discoveryPage;