const express = require("express");
const path = require("path");
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 8080;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : false }));

app.use(express.static(path.join(__dirname, 'dist')));
app.set('views', path.join(__dirname, 'views'));

app.post('/api/capture', function(req, res) {
    const exec = require('child_process').exec;
    const cmd = 'wget ' + req.body.s;
    exec(cmd, function(error, stdout, stderr) {
        console.log(error);
        console.log(stdout);
        console.log(stderr);
    });
    res.send("#### WIP ####");
});

app.listen(port);
console.log('Server started! At http://localhost:' + port);
