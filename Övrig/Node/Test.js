var http = require('http');
var tid = require("./myFirstModule")

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello World!' + tid.dateTime());
}).listen(8080);

console.log('This example is different!'); // detta syns i terminalen
console.log('The result is displayed in the Command Line Interface');
