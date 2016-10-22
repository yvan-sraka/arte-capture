const express = require("express");
const path = require("path");
const bodyParser = require('body-parser');
const request = require('request-promise')


const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname,'dist')));
app.set('views', path.join(__dirname, 'views'));



app.listen('3000');
