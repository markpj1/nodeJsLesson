angular.module('TestApp', []);

angular.module('TestApp')
    .controller('MainController', ctrlFunc);

function ctrlFunc() {
    this.message = 'Hello';

    this.people = [{
        name: 'Mark Jaramillo'
    }, {
        name: 'Tina Jones'
    }, {
        name: 'Reubin'
    }];
}
