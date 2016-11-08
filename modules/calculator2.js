var subtract = require('./operations/subtract');
var multiplyNumbers = require('./operations/multiply-numbers');

var answerFromCalculator2 = subtract(10, 5);

module.exports.answer = answerFromCalculator2;
module.exports.multiplication = multiplyNumbers;
