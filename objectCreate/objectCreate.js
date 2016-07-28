var person = {
    firstName: '',
    lastName: '',
    greet: function () {
        console.log('Hello ' + this.firstName + ' ' + this.lastName);
    }
}

var Mark = Object.create(person);
Mark.firstName = 'Mark';
Mark.lastName = 'Jaramillo';

Mark.greet();


var Tina = Object.create(person);

Tina.firstName = 'Tina';
Tina.lastName = 'Jones';

Tina.greet();