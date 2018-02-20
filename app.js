var express = require('express');
var app = express();
var events = require("events");
var util = require("util");
var db = require('./public/db.js');
var drawer = require('./public/drawer.js');
var bodyParser = require('body-parser');
var save;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.use(express.static('public'));

app.get("/",function(req,res) {
     res.setHeader("Content-Type","application/javascript");
      res.sendFile(__dirname+"/public/index.html");
})

app.get("/save",function(req,res) {
})
app.post("/json",function (req,res) {
  save = req.body;
  res.end();
})
app.get("/load",function (req,res) {

  res.send(save);

})
app.post("/test",function(req,res) {
  console.log("TEST GOOD");
  x = db.returnX();
  y = db.returnY();
  console.log(x +" " + y);
})

app.listen(3000, function() {
  console.log('Example app listening on port 3000!');
});
