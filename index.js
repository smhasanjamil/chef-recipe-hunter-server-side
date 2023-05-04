const express = require('express');

const cors = require("cors");

const app = express();

app.use(cors());

const allChef = require("./data.json");

app.get('/', (req, res) => {
    res.json({ message: "My server is running" });
});

app.get('/allData', (req, res) => {
    res.send(allChef)
    // console.log('Hello')
});

app.get('/allData/:id', (req, res) => {
    const id = req.params.id;
    const chef = allChef?.find(uid=>uid.id==id);
    res.send({chef});
    // console.log(chef);
});

app.listen(5000, () => {
    console.log('Server running on the port 5000');
})