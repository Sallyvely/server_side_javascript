var express = require('express');
var app = express();
var fs = require('fs');

app.set('view engine', 'jade');
app.set('views','./view_web');
app.get('/',function(req,res){
  res.render('form');
});
app.get('/login',function(req,res){
  res.render('login');
});
app.listen(3020, function(){
  console.log('Connected, 3020 port!');
});
