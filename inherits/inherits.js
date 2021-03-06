//inherits from EventEmmiter
var EventEmitter = require('events');
var util = require('util');

//Create function constructor
function Greeter() {    
    this.greeting = 'Hello World';
}

//any objects from Greeter should have access to prototypeEventEmitter
util.inherits(Greeter, EventEmitter);// when invoked finds prototype property of event emitter

//can add extra methods and properties after the fact and access EventEmitter Properties 
//and methods
//greet function logs and emits
 Greeter.prototype.greet = function (data) {
     console.log(this.greeting + ': ' + data);
     this.emit('greet', data);//emit invokes greet
 }

//Create new Greeter object
 var greetFun = new Greeter();

// has access to utils methods
 greetFun.on('greet', function (data) {
     console.log('Someone greeted! ' + data);
 });

//invoke inherit function
greetFun.greet('Marko');
