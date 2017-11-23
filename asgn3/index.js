
var express = require('express');
var app = express();
var p1_func = require("./js/p1");
var p2_func =require ("./js/p2");

var bodyParser = require("body-parser");


app.get("/services/p1", function (req, res){ // Take care of request "/services/p1", from html


  //console.log(p1_func(req.query.data)); // From p1_func we get the Q array with values, this Q we send back to p1.html with res.send

  res.send(p1_func(req.query.data)); // From p1_func we get the Q array with values, this Q we send back to p1.html with res.send
  // req.query.data är datan från html, alltså från textrutan

})
/*app.get('/get', function (req, res) {
  //res.send(p1_func());
   res.sendfile('./public/p1.html');
}) */


// %%%%%%%%%%%  Post %%%%%%%%%%%%%


app.use(bodyParser.urlencoded({extended: false}));



app.post('/services/p2', function (req, res) {

  p2_func(req.body);


})



var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port

   console.log("Url for this is http://0.0.0.0:8081")
})





// Use "require()" to obtain the functions from
// p1.js and p2.js

// Add routing rules in this file so that
// (1) Any GET request sent to "/services/p1"
// will be handled by the function exported by p1.js.
// (2) Any POST request sent to "/services/p2"
// will be handled by the function exported by p2.js.
//
// For POST requests, you may need to use a body-parser
// to decode its body here first.


app.use('/', express.static('public'));


//app.listen(8081);
