var express = require('express'); 
var app = express();
var fs = require('fs'); 
app.get('/getUsers', function(req, res){
    fs.readFile(__dirname + "/" + "user.json", 'utf8', function(err, data){
        console.log(data);
        res.end(data); // you can also use res.send()
    });
})


var server = app.listen(8000, function(){
    var host = server.address().address
    var port = server.address().port
    console.log("REST API demo app listening at http://%s:%s", host, port)
})