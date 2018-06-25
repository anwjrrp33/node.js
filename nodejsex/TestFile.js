'use strict';
const fs = require("fs");
const request = require('request');

// Replace <Subscription Key> with your valid subscription key.
const subscriptionKey = '658874de29834cbbb8645c9346570962';

// You must use the same location in your REST call as you used to get your
// subscription keys. For example, if you got your subscription keys from
// westus, replace "westcentralus" in the URL below with "westus".
const uriBase = 'https://westcentralus.api.cognitive.microsoft.com/face/v1.0/detect';

var data = fs.readFileSync("./rhj.jpg");

const imageUrl =
    'https://www.saramin.co.kr/zf_user/persons/picture?idx=5953222|4eb4c77fe185942f04194a6e9a778cb2e085db97c995a343d1b7158c504a4522';

// Request parameters.
const params = {
    'returnFaceId': 'true',
    'returnFaceLandmarks': 'false',
    'returnFaceAttributes': 'age,gender,headPose,smile,facialHair,glasses,' +
    'emotion,hair,makeup,occlusion,accessories,blur,exposure,noise'
};

const options = {
    uri: uriBase,
    qs: params,
    body: data,
    headers: {
        'Content-Type': 'application/octet-stream',
        'Ocp-Apim-Subscription-Key' : subscriptionKey
    }
};

request.post(options, (error, response, body) => {
    if (error) {
        console.log('Error: ', error);
        return;
    }
    let jsonResponse = JSON.stringify(JSON.parse(body), null, '  ');
    console.log('JSON Response\n');
    console.log(jsonResponse);
});