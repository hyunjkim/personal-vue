const express = require('express');
const path = require('path');
const port = process.env.PORT || 5000;
const app = express();

app.use(express.static(__dirname + "/src/main.js'"));
app.listen(port);
console.log('server started '+ port);

