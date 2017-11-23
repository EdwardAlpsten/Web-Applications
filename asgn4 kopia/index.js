require('./js/db.js'); // Set up DB

let express = require('express');
let app = express();
let asgn4Router = require('./js/asgn4.js');

app.use('/asgn4', asgn4Router);

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/asgn4.html');
});
console.log("Url for this is http://0.0.0.0:8081")
app.listen(8081);
