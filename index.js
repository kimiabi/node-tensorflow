const express = require("express");
const cors = require("cors");
const db = require("./config");
const app = express();
const suggestionsController = require('./controllers/suggestions'); 
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
    
    res.send({ msg: "Added" });
});

// app.get("/collection/", async (req, res) => {
//     const name = req.query.name;
//     const snapshot = await db.collection(name).get();
//     const list = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
//     res.send(list);
//     suggestionsController.print;
// });

app.get("/collection/", suggestionsController.print);

app.get("/products/", suggestionsController.getProductByCategory);


app.get("/key/", suggestionsController.procesingData);



app.listen(8080, () => console.log("Up & RUnning *8080"));
