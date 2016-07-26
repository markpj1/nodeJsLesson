var greeting = 'revealing module pattern';

function greet() {
    console.log(greeting);
}

module.exports = {
    greet: greet
}