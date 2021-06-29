import React from 'react'
import { Button } from "react-bootstrap";
//import Header from "../header/header";
//import Discovery from "../discovery/discovery";

function DiscoveryS() {

const DiscoveryV1 = require('ibm-watson/discovery/v1');
const { IamAuthenticator } = require('ibm-watson/auth');


const discovery = new DiscoveryV1({
  version: '2019-04-30',
  authenticator: new IamAuthenticator({
    apikey: 'zxIfLbDWvLj6bGTg7v7wr4pJ1RGpJlfyge4T-mSLdTRq',
  }),
  url: 'https://api.eu-de.discovery.watson.cloud.ibm.com/instances/f014925c-f2b8-4b02-ab32-3efcc1cd427d',
});

 
const handleRecommendation = (queryParams) =>{
    
  discovery.query(queryParams)
  .then(queryResponse => {
    console.log(JSON.stringify(queryResponse, null, 2));
  })
  .catch(err => {
    console.log('error:', err);
  });
}
    return(    
                 <div>
                 <Button onClick={handleRecommendation}>
      Get Recommendation
      </Button>
             </div>
         )
   ;}

   export default DiscoveryS;
