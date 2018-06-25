var request = require("request");
var iconv= require("iconv-lite");
var charset = require("charset");
var newsPath = "http://prod.danawa.com/list/?cate=112758";

var option = {
    url:newsPath,
    method:'GET'
};

request(option, function (error, response, body) {

    console.log("response : " + response);
    console.log(body);
    var strContents = new Buffer(body);
    console.log(charset(response.headers, body));
})