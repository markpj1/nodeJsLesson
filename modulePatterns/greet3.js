//replace exports with costume object using constructor function
function Greeter() {
    this.greeting = 'function constructor method';
    this.greet = function() {
        console.log(this.greeting);
    }
}
//create new instance of Greet to replace module.exports
module.exports = new Greeter();
