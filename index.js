require('dotenv').config()
var express = require("express");
var app = express();

app.get('/', (req, res) => {
    res.send("Hello world!")
});

const PORT = process.env.PORT | 3000

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`))