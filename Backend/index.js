var express = require('express');  
const fs = require('fs')
var app = express();  
app.post('/', function(req,res){
    console.log('file',req.file)
    // fs.readFile(req.files.file.path, function(err, data){
      // Do something with the data (which holds the file information)
    //   console.log("data",data)
    //   res.send(data)
    // });
  })  
var server = app.listen(8000, function () {  
var host = server.address().address  
  var port = server.address().port  
 console.log("Example app listening at http://%s:%s", host, port)  
})  
