
var express = require ('express');

var app = express();

var path = require ('path');

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
