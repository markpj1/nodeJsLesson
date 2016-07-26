//replace exports with costume object using constructor function
function Greeter() {
    this.greeting = 'Create new instance in app.js file';
    this.greet = function() {
        console.log(this.greeting);
    }
}
//create abilty to create new instance of Greeter.
module.exports = Greeter;
