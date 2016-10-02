var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.use(express.static(__dirname + '/public/dist'));
app.use(bodyParser.urlencoded({extended: false})); 
app.use(bodyParser.json());

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/public/dist/index.html')); 
});

app.listen(8086, function(err) {
   if(err) {       
       console.error("Error in starting the port at " + 8086);
   } else {       
       console.info("Server listening on port: " + 8086);
   } 
});