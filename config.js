const firebase = require('firebase-admin');

var serviceAccount = require("./easyget-km-f533f20a08d7.json");


firebase.initializeApp({
    credential: firebase.credential.cert(serviceAccount)
});
const db = firebase.firestore();
//const Search = db.collection("searches");
// module.exports = Search;
module.exports = db;