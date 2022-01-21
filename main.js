const http = require('http');
const express = require('express');

const app = express();

app.use("/", (req, res,next) => {
    res.send('<h1>This is version 1</h1>');
});
app.listen(3000);