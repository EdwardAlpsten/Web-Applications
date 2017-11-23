// You need to "require" persons.js in this file to access the array of persons

var p = require("./persons");

module.exports = function(req, res) {

  var Q = req;
  var i = Q["index"];
  var success = 0;
  //console.log(p[i]);
  if (p[i].index == i){
    p[i].name= Q["name"];
    p[i].eyeColor= Q["eyeColor"];
    p[i].age= Q["age"];
    success = 1;


  }
  //console.log(p[i]);

  return success;


  // Retrieve the "person" object from the request.
  // You may assume the "person" object is valid
  // Let Q be this object

  // Let P be the array of persons

  // Replace P[i] by Q if P[i].index == Q.index

  // Send 1 in the body of the response if a replacement successfully
  // took place.
  // Otherwise, send 0 in the body of the response.
}
