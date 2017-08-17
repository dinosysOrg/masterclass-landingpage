let express = require('express');
let app = express();
let enRoute = express.Router();
let viRoute = express.Router();

//** English Route */
enRoute.get('/ampa', function(req,res) {
  res.sendFile(__dirname + '/ampa_en.html')
})
enRoute.get('/wonderkid', function(req,res) {
  res.sendFile(__dirname + '/wonderkid_en.html')
})
enRoute.get('/', function(req,res) {
  res.sendFile(__dirname + '/index_en.html')
})

//** VietName Route */
viRoute.get('/ampa', function(req,res) {
  res.sendFile(__dirname + '/ampa_vi.html')
})
viRoute.get('/wonderkid', function(req,res) {
  res.sendFile(__dirname + '/wonderkid_vi.html')
})
viRoute.get('/', function(req,res) {
  res.sendFile(__dirname + '/index_vi.html')
})

app.use('/en', express.static(__dirname), enRoute);
app.use('/vi', express.static(__dirname), viRoute);

app.get('*', function(req, res) {
  res.redirect('/en');
});

app.listen(3030, function(err) {
  if(err){
    console.log('Err!')
  }
});
