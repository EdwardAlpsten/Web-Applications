var express = require('express');
var router = express.Router();




router.get("/", function(req,res){
  res.sendFile(path.join(__dirname+"/exercise_html.html"));
});

// Här exporter vi alltså vår router
module.exports=router;


//
