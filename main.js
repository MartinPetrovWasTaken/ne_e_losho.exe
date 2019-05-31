const express = require('express');
const app = express();
const path = require('path');
const connection = require('./connection.js');
const tables = require('./tables.js');
const $ = require('jQuery');

app.use(express.static(__dirname + '/views'));

app.get('/', (req, resp) => {
    resp.sendFile(__dirname + '/views/home.html');
});

app.post('/newTeacher', (req, resp) => {
    console.log(req.params.name);
});

app.listen(1337);
