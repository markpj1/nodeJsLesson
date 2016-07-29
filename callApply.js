var obj = {
    name: 'Mark P Jaramillo',
    greet: function () {
        console.log(`Hello ${this.name}`);
    }
}

obj.greet(); // Hello Mark p Jaramillo
obj.greet.call({name: 'Calls a method of an object substituting another object for the current object'});
obj.greet.apply({name: 'Calls a method of an object substituting another object for the current object'});
