const db = require("../config");

async function print(req, res) {
    const name = req.query.name;
    const snapshot = await db.collection(name).get();
    const list = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    res.send(list);
}

async function getProductByCategory(req, res) {
    const categoryId = req.query.categoryId;
    const userId = req.query.userId;
    const snapshot = await db.collection("products").where("categoryId", "==", categoryId).get();
    const products = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));

    products.forEach(product => {
        product.productId = product.id; 
        product.userId = userId;
    });

    const suggestion = {
        name:"productsSuggestionsModels",
        products: products
    }
    res.send(suggestion);
}


async function procesingData(req, res) {
    // const key = req.query.key;
    const userId = req.query.userId;

    const snapshot = await db.collection("searchModels").orderBy("registration","desc") .get();
    const searchs = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));

    console.log("products", searchs);

    const search = searchs[0];

    const categoryId = search.categoryId;
    const key = search.key;

    
    //TRAE EL PRODUCTO CON CATEGORIAS
    const snapshot2 = await db.collection("products").where("categoryId", "==", categoryId).get();
    const products = snapshot2.docs.map((doc) => ({ id: doc.id, ...doc.data() }));

    products.forEach(product => {
        product.productId = product.id;
        product.userId = userId;
    });

    const suggestion = {
        name: "productsSuggestionsModels",
        products: products
    }

    console.log(categoryId + " -" + key);

    res.send(suggestion);
}

async function getProducts(categoryId) {
    const snapshot = await db.collection("products").where("categoryId", "==", categoryId).get();
    const products = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    
    return products;
}


module.exports = {
    print,
    getProductByCategory,
    procesingData
};
