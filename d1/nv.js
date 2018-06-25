var request = require("request");

var cheerio = require("cheerio");
var iconv = require("iconv-lite");
var requestOptions = {
    method: "GET",
    uri: "http://info.finance.naver.com/marketindex/",
    headers: {"User-Agent": "Mozilla/5.0"},
    encoding: null
};

request(requestOptions, function (error, response, body) {

    var strContents = new Buffer(body);
    console.log(iconv.decode(strContents, 'EUC-KR').toString());
});