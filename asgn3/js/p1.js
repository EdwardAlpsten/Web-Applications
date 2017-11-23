// You need to "require" persons.js in this file to access the array of persons

var p = require("./persons");

//$('#mylist').append('<li>"testar"</li>');
module.exports = function(req, res) {
  var Q = [];


  for (i = 0; i < p.length; i++) {
    if (req==p[i].name.substring(0,req.length)){ // Checks to se if "subname" is equal to my req, if it is push the name and attributes
      //Q.push(p[i]);
      Q.push("index: " + p[i].index + ", age: " + p[i].age + ", eyeColor: " + p[i].eyeColor + ", name: " + p[i].name)
    }
  }

  return Q

  // Retrieve the "prefix" string from the request
  // Let S be this string

  // Let P be the array of persons

  // Create an empty array, Q

  // Append P[i] to Q if S is a prefix of P[i].name
  // Note: Empty string is treated as a prefix for all strings

  // Send Q in the body of the response
}
