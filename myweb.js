var express = require('express');
var app = express();
var mysql = require('mysql')
var fs = require('fs');
var connection = mysql.createConnection({
  host : '127.0.0.1',
  user : 'sally',
  password : '@seyeun1998',
  database : 'web_db'
});

connection.connect();
app.set('view engine', 'jade');
app.set('views','./view_web');
app.get('/',function(req,res){
  res.render('form');
});
app.get('/profile',function(req,res){
  res.render('profile');
});
app.get('/login',function(req,res){
  res.render('login');
});

app.listen(3020, function(){
  console.log('Connected, 3020 port!');
});
