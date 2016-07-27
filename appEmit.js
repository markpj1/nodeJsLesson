//var Emitter = require('./emitter/emitter'); ////My Naive Emitter function

//Event from nodeJS
var Emitter = require('events');
var config = require('./configFile').events;

var emtr = new Emitter();

emtr.on(config.GREET, function () {
    console.log('Somewhere, someone said hello. 001');
})

emtr.on(config.GREET, function () {
    console.log('This is a Emitter Loopy thingy 002');
})

emtr.emit(config.GREET);