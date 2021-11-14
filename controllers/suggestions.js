const db = require("../config");

async function print(req, res) {
    const name = req.query.name;
    const snapshot = await db.collection(name).get();
    const list = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    res.send(list);
}

module.exports = {
    print
};
