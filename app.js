var express = require('express');
var mongoose = require('mongoose');
var app = express();

//Make connection to mongo and make database
mongoose.connect("mongodb://localhost/candy-shop");

var db = mongoose.connection;
//Let's attach an event listener for connection errors
db.on('error', console.log.bind(console, 'connection error:'));
//Let's attach an event listern to run one time when the connection opens
db.once('open', function (argument) {
  console.log('Boom! We are connected to mongo');
});


//Let's make a schema for our users
var userSchema = mongoose.Schema({
    name: String,
    email: String
});

//Let's make a model using the above mentioned schema
var User = mongoose.model('User',userSchema)

//Middleware logger
app.use(function (request,response,next) {
  console.log('request recieved %s %s', request.method , request.url);
  next();
});





app.listen(3000)
