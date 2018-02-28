const express = require('express');
const app = express();
const path = require('path');


const port = 8000;

app.use('/public', express.static(__dirname + 'public'));

app.listen(process.env.PORT || port, function() {
    console.log('running server');
});

app.get('/', function(req, res){
    res.sendFile(path.join(__dirname + '/public/app/views/index.html'));
});

app.get('/js/materialize.min.js', function(req, res){
    res.sendFile(__dirname + '/public/app/assets/js/materialize.min.js');
});

app.get('/css/materialize.min.css', function(req, res){
    res.sendFile(__dirname + '/public/app/assets/css/materialize.min.css');
});

app.get('/fonts/roboto/Roboto-Regular.woff2', function(req, res){
    res.sendFile(__dirname + '/public/app/assets/fonts/roboto/Roboto-Regular.woff2');
});

app.get('/fonts/roboto/Roboto-Regular.woff', function(req, res){
    res.sendFile(__dirname + '/public/app/assets/fonts/roboto/Roboto-Regular.woff');
});

app.get('/fonts/roboto/Roboto-Light.woff2', function(req, res){
    res.sendFile(__dirname + '/public/app/assets/fonts/roboto/Roboto-Light.woff2');
});

app.get('/fonts/roboto/Roboto-Light.woff', function(req, res){
    res.sendFile(__dirname + '/public/app/assets/fonts/roboto/Roboto-Light.woff');
});


