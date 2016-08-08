var fs = require('fs'); //Built in fs module deals with file system

var greet = fs.readFileSync(__dirname + '/greet.txt', 'utf8'); // __dirname path to location of name of file, Get data from .txt file.
console.log(greet); //Hello World! from greet.txt

var greet2 = fs.readFile(__dirname + '/greet.txt', 'utf8', function(error, data) {
    console.log(data);
});

console.log('Done'); //this is an example of asynchronous code
//the greet2 invokes callback after all call are done. 
// Hello World 
// Done
//Hello World 
