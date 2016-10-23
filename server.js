const express = require("express");
const path = require("path");
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 8080;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : false }));
app.use(express.static(path.join(__dirname, 'dist')));
app.use(express.static(path.join(__dirname,'lib')));
app.set('views', path.join(__dirname, 'views'));
app.set('assets', path.join(__dirname, 'assets'));

app.listen(port);
console.log('Server started! At http://localhost:' + port);
