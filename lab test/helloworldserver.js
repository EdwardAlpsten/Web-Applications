var express = require('express');
var app = express();


app.get("/", function(req,res){
  // Sends
  res.send("Heerrpo");
});


//
var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port

   console.log("Url for this is http://0.0.0.0:8081")
});
