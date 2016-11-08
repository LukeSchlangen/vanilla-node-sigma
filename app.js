var theNumberFour = 9;
var theNumberTwo = 2;
var calculator = require('./modules/calculator');
var calculator2 = require('./modules/calculator2');
var http = require('http');

// console.log("Addition: ", calculator.addition(theNumberFour, theNumberTwo));
// console.log("Subtraction: ", calculator.subtraction(theNumberFour, theNumberTwo));
// console.log("Multiplication: ", calculator.multiplication(theNumberFour, theNumberTwo));
//
// console.log("The Answer from calculator2 was: ", calculator2.answer);

var portDecision = 3000;

http.createServer(function(req, res){
  res.writeHead(200);
  res.write("You did it on your first try!\n\n");
  res.end();
}).listen(portDecision);

  console.log("Listening on port: ", portDecision);
