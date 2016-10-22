const express = require("express");
const path = require("path");
const bodyParser = require('body-parser');
const request = require('request-promise')


const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname,'dist')));
app.set('views', path.join(__dirname, 'views'));

// const video = {
//   method: 'GET',
//   uri: ''
// }
//
// request(video)
//   .then(function (response) {
//     // Request was successful, use the response object at will
//   })
//   .catch(function (err) {
//     // Something bad happened, handle the error
//   })

app.listen('3000');
