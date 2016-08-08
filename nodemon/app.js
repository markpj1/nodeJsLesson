var express = require('express');
var bodyParser = require('body-parser');//not automatically hooked
var app = express();
//enviroment variables
var port = process.env.PORT || 3000;

//create app/x-www-form-urlencoded parser.
var urlencodedParser = bodyParser.urlencoded({ extended: false});

var jsonParser = bodyParser.json();


//access static files with middleware
app.use('/assets', express.static(__dirname + '/public'));

app.set('view engine', 'ejs');

//HTTP 'GET POST DELETE' /verb 
app.get('/', function (req, res) {
  //res.send('<html><head></head><body><h1><link href=assets/style.css type=text/css rel=stylesheet><h1>Hello World!!!</h1></body></html>');
  res.render('index');
});

//passing varaibles via route pattern matching
app.get('/person/:id', function (req, res) {
  //res.send('<html><head></head><body><h1><link href=assets/style.css type=text/css rel=stylesheet><h1>Person: ' + req.params.id + '</h1></body></html>');
  res.render('person', { ID: req.params.id, Qstr: req.query.qstr });
 
});


//POST using urlencodedParser 
app.post('/person', urlencodedParser, function (req, res) {
  //res.send('<html><head></head><body><h1><link href=assets/style.css type=text/css rel=stylesheet><h1>Person: ' + req.params.id + '</h1></body></html>');
  res.send('Thank You!');
  console.log(req.body.firstname);
  console.log(req.body.lastname);  
});

app.post('/personjson', jsonParser, function(req, res) {
    res.send('Thanks for the JSON data!');
     console.log(req.body.firstname);
     console.log(req.body.lastname);
});

app.get('/api', function (req, res) {
    res.json({ firstname: 'Mark', lastName: 'Jaramillo' });
});

app.listen(port);


