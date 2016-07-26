//access greetings.json directly with dot notation 
var greetings = require('./greetings.json')

var greet = function () {
    console.log(greetings.es);
};

module.exports = greet;