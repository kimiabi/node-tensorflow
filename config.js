const firebase = require('firebase-admin');

const firebaseConfig = {
    apiKey: "AIzaSyDMFGCTyHS-ciL8ujQIKS9GQMFQM1mx78o",
    authDomain: "easyget-km.firebaseapp.com",
    projectId: "easyget-km",
    storageBucket: "easyget-km.appspot.com",
    messagingSenderId: "323282842764",
    appId: "1:323282842764:web:4defcb1b4b03cc8105b7a9",
    measurementId: "G-2VZ8D9CT0S"
};

var serviceAccount = require("/home/alex/easyget-km-f533f20a08d7.json");


firebase.initializeApp({
    credential: firebase.credential.cert(serviceAccount)
});
const db = firebase.firestore();
//const Search = db.collection("searches");
// module.exports = Search;
module.exports = db;