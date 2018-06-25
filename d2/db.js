var admin = require("firebase-admin");

var serviceAccount = require("./jr-fed2b-firebase-adminsdk-dw6xz-628d1ee81e.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://jr-fed2b.firebaseio.com"
});

var db = admin.database();
var ref = db.ref("members");

function save(member, callback) {

    var key = ref.push(member).key;

    callback(key);
}

function read(key, callback){

    db.ref("/members/" +key).once("value").then(function(data){
        var result = data.val();
        callback(result);
    });
}

/*save({name:"AAA", age:19}, function (result) {
   console.log(result);
});

var key = "-LFKyPmX6UE_gfdgq3JQ";

read(key, (obj) => console.log(obj));*/

module.exports = {save:save, read:read};