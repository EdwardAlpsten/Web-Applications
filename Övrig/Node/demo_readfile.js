var http = require('http');
var fs = require('fs');
http.createServer(function (req, res) {
  fs.readFile('/Users/EdwardAlpsten/Documents/CUHK Studier/Web Applications/asgn2-dom/asgn2.html', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    res.end();
  });
}).listen(8080);
