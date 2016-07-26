//set var to results of require function.
var greet = require('./modulePatterns/greet1');
greet();

//access method of modules.export.greet with dot notation
//then invoking greet2 function 
var greet2 = require('./modulePatterns/greet2').greet;
greet2();

//get greet3 object and access method with dot notation.
var greet3 = require('./modulePatterns/greet3');
greet3.greet();

//source of confusion passed by reference a mutatable object  
greet3.greeting = 'Changed Text inside Object';
var greet3b = require('./modulePatterns/greet3');
greet3b.greet();



//create new instance passed by value. 
var Greet4 = require('./modulePatterns/greet4');
var GreetInstance = new Greet4();
GreetInstance.greet();

var greet5 = require('./modulePatterns/greet5');
greet5.greet();
