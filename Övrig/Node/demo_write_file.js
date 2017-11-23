var fs = require('fs');

fs.writeFile('mynewfile2.txt', 'Hello content!', function (err) {
  if (err) throw err;
  console.log('Saved!');
});

// write skriver över filen med det nya
