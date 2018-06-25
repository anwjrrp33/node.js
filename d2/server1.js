var express = require("express");
var app = express();

var db = require("./db");

app.use(express.json());

app.get("/:key", (req, res, next) => {

    console.log(req.params.key);

    db.read(req.params.key, (obj) => {
        res.send(obj);
    });
});

app.post("/", (req, res, next) => {

    var obj = req.body;

    db.save(obj, (key) => {
        res.send({key:key})
    });
});

app.listen(3000, () => {console.log("Hello RUN SERVER")});