const express = require('express');

const app = express();

const allChef = require("./data.json");

app.get('/', (req, res) => {
    res.json({ message: "My server is running" });
});

app.get('/allData', (req, res) => {
    res.send(allChef)
    // console.log('Hello')
});

app.listen(5000, () => {
    console.log('Server running on the port 5000');
})