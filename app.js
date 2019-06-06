var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const $ = require('jQuery');
const fs = require('fs');
var request = require('ajax-request');
var bodyParser = require('body-parser');


//
// var indexRouter = require('./routes/index');
// var usersRouter = require('./routes/users');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'views')));
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json());

// app.use('/', indexRouter);
// app.use('/users', usersRouter);
//Content-Security-Policy: default-src 'self'; img-src * data:; media-src *; style-src 'self' 'unsafe-inline'
app.all('/*', function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type,accept,access_token,X-Requested-With');
    next();
});

app.get('/', (req, resp) => {
    resp.sendFile(__dirname + '/views/home.html');
});



app.post('/newTeacher', function(req, resp){
  const postFirstName = req.body.firstname;
  const postLastName = req.body.lastname;
  var data = {postFirstName, postLastName};
  //var li = $("<li/>", {text: postFirstName});
  //console.log("");
  resp.contentType('text/html');
  resp.send("Teacher's name: " + postFirstName + ' '  + postLastName);
  //let writeRes = JSON.stringify($('#fname').val());

  //document.write('asdasdasdadsa');
});

// app.get('/newTeacher', (req, resp) => {
//     cons postName = request.;
// });

app.listen(3000);
