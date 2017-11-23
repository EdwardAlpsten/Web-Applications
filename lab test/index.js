var express = require('express');
var app = express();
var path = require("path"); // Används ej
var rout = require("./rout.js");

var bodyParser = require("body-parser"); // För post



// %%%%%%%%%%%%%%%%%%%% s.19 och 20 är viktiga för get och post request


// Denna anropas först för att sedan skicka vidare
app.use(function(req,res,next){
  console.log("Start");
  next();
});

// Ifall jag inte preciseras så anropas denna
app.get("/", function(req,res){
  res.sendFile(path.join(__dirname+'/exercise_html.html'));
  //__dirname : It will resolve to your project folder.
});

app.get("/index", function(req,res){
  res.sendFile(path.join(__dirname+"/index.html"));
});


// Här är mitt get request från index.html
app.get("/skicka_get",function(req,res){
  console.log(req.query.data + "jorå");
});

app.use(bodyParser.urlencoded({extended: false}));
// Post request från index.html, har lagt till parser högst i filen för att denna ska fungera
app.post("/skicka_post",function(req,res){
  console.log(req.body.data + "    postnjaaarå");
});


// Dynamic routing
// allt inom () är regler för id... Får vara mellan 0-9 och {5} siffror långt, annars funkar det inte
app.get("/dynamic:id([0-9]{5})", function(req, res){
  res.send("The id jag dynamisk jag specificerade var " + req.params.id);
});


// Här routar jag vidare till en ny fil, se filen rout.js
app.use("/rout", rout);


//
var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port

   console.log("Url for this is http://0.0.0.0:8081")
});


// Varför jag har denna vet jag inte
app.use('/', express.static('public'));
