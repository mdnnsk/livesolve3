
var express = require ('express');

var app = express();

app.listen( 3000, 'localhost', function(){
  var port = server.address().port;
    console.log('server is listening on ' + port);
});
// base url
app.get('/', function(req,res){
  console.log('in base url');
  res.write("this is the home page");
  res.end();
});
