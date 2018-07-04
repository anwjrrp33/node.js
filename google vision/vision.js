var vision = require('google-vision-api-client');

var requtil = vision.requtil;

var jsonfile = 'jsonfile path';

vision.init(jsonfile);

var d = requtil.createRequests().addRequest(

    requtil.createRequest('Image file path')

        .withFeature('FACE_DETECTION', 3)

        .withFeature('LABEL_DETECTION', 2)

        .build());

vision.query(d, function(e, r, d){

    if(e) console.log('ERROR:', e);

    var face = d["responses"][0].faceAnnotations;

    if(face == null) return false;

    return true;
});