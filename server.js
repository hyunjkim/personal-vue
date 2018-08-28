const express = require('express');
const serveStatic = require("serve-static");
const {resolve, join} = require('path');
const port = process.env.PORT || 5000;
const app = express();

app.use(express.static(join(__dirname, '/dist')));
app.use(express.static(resolve(__dirname, '.', 'public'))); // Serve static files from ../public
app.get('*/', (_, res) => res.sendFile(resolve(__dirname, '.', 'public', 'index.html'))); // Send index.html for any other requests.

app.listen(port, () => console.log("Starting server: ", port));
