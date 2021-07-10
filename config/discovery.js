const DiscoveryV1 = require('ibm-watson/discovery/v1');
const { IamAuthenticator } = require('ibm-watson/auth');

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

const queryConfig = {
    environmentId: 'e6d028cf-884a-4004-9131-7bae292ed0d9',
    collectionId: 'd2c0c8dc-4941-4667-855c-7f28f0baaf56',
    type: "term",
    field: "answer",
    count: 1
};

module.exports = {discovery, queryConfig}