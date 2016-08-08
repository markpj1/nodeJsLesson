var buf = new Buffer('Hello', 'utf8');
console.log(buf); //returns utf8 hex data
console.log(buf.toString()); //returns string 
console.log(buf.toJSON()) //returns JSON unicode char set.


console.log(buf.toString()); 
console.log(buf[2]); //can use buffer like array

buf.write('wo');
console.log(buf.toString());

var arrayBuffer = new ArrayBuffer(8); //from V8 not node.
var view = new Int32Array(arrayBuffer);

view[0] = 5;
view[1] = 15;

console.log(view); //{0: 5, 1: 15}
 //new for ES6 able to deal with binary data


