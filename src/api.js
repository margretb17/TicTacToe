const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.type('json');
    res.status(200).send({});
});


module.exports = app;