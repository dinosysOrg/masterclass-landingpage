var express = require('express');
var app = express();

app.use(express.static(__dirname));

app.use('*', function(req, res) {
  res.sendFile(__dirname + '/index_en.html')
});

app.listen(3030, function(err) {
  if(err){
    console.log('Err!')
  }
});
