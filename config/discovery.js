const DiscoveryV1 = require('ibm-watson/discovery/v1');
const { IamAuthenticator } = require('ibm-watson/auth');
const  keys = require("../config/keys");

var clientId = "FREE_TRIAL_ACCOUNT";
var clientSecret = "PUBLIC_SECRET";

//discovery instance setup
const discovery = new DiscoveryV1({
    version: '2019-04-30',
    authenticator: new IamAuthenticator({
        apikey: keys.API_KEY,
    }),
    serviceUrl: 'https://api.eu-de.discovery.watson.cloud.ibm.com/instances/f014925c-f2b8-4b02-ab32-3efcc1cd427d',
    disableSslVerification: true
});

const queryConfig = {
    environmentId: keys.ENVIRONMENT_ID ,
    collectionId: keys.COLLECTION_ID ,
    type: "term",
    field: "answer",
    count: 1
};

module.exports = {discovery, queryConfig}