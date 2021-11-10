const express = require("express");
const cors = require("cors");
const db = require("./config");
const app = express();
app.use(express.json());
app.use(cors());

app.post("/create-collections", async (req, res) => {
    const data = req.body;

    data.products.forEach(element => {
        db.collection(data.name).add(element)
            .then(function (docRef) {
                console.log("Document written with ID: ", docRef.id);
            })
            .catch(function (error) {
                console.error("Error adding document: ", error);
            });
    });
    
    res.send({ msg: "User Added" });
});

app.listen(4000, () => console.log("Up & RUnning *4000"));
