const express = require('express');
const app = express();
const enRoute = express.Router();
const viRoute = express.Router();
const cmd = require('node-cmd');

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

app.post('/deploy', function(req, res) {
  cmd.get(
    'git pull',
    function(err, data, stderr) {
      if (!err) {
        console.log('the node-cmd cloned dir contains these files :\n\n', data);
      } else {
        console.log('error', err);
      }

      res.send('Deployed Ok').status(201);
    }
  );
});

app.listen(3000, function(err) {
  if(err){
    console.log('Err!')
  }

  console.log('Server is listening at port : 3000');
});
