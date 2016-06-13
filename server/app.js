
var express = require ('express');

var app = express();

var path = require ('path');

var bodyParser=require('body-parser');
// for POST functionality
var urlencodedParser=bodyParser.urlencoded ( { extended: true} );

var mathProwler = require ('../modules/mathProwler.js');
// spin up server
app.listen( 3000, 'localhost', function(){
  // var port = server.address().port;
    console.log('server is listening on port 3000');
});
// base url
app.get('/', function(req,res){
  // server side logs show up in terminal
  console.log('in base url');
  // write something on the page
  res.sendFile( path.resolve( 'views/index.html'));
});

// set up a folder for static files
app.use(express.static('public'));

//calcNow

app.post('/calcNow', urlencodedParser, function(req,res){

  console.log('in calcNow:');
  console.log(req.body.x + " " + req.body.y + " " + req.body.operation);

  console.log(mathProwler ( req.body ));
});
