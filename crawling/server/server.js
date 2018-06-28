var express = require("express");

var axios = require("axios");

var app = express();

var jsessionid, csrfToken;

var product;

app.get("/gs25", (req, res, next) => {
    res.set({ 'content-type': 'application/json; charset=utf-8' });

    res.send(product);
});

app.listen(3000, () => {
    axios.get("크롤링 할 주소").then(response => {
        //console.log(response);

        jsessionid = response.headers['set-cookie'].toString().split("=")[1].split(".")[0];

        console.log(jsessionid);

        var idx = response.data.indexOf("input type=\"hidden\" name=\"CSRFToken\"");

        var str = response.data.substr(idx, 80);

        //console.log(str);

        csrfToken = str.split("=")[3].substr(1);

        console.log("--------------------------------------------------");
        console.log("--------------------------------------------------");

        axios.get("csrf토큰을 보내는 경로" + csrfToken).then(resdata => {
            console.log(resdata.data);

            product = resdata.data;
        });
    });
});