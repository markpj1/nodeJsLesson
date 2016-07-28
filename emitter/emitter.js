//Naive implementation
//Constructor function
function Emitter () {
    this.events = {};
}

//Populate Emitter
Emitter.prototype.on = function (type, listener) {
    this.events[type] = this.events[type] || [];
    this.events[type].push(listener);
}
//invoke fnction in array.
Emitter.prototype.emit = function (type) {
    if(this.events[type]) {
        this.events[type].forEach(function(listener) {
            listener();
        });
    }
}

module.exports = Emitter;