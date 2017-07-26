const express = require('express');
const mustache = require('mustache-express');
const app = express();
const path = require('path');
const data = require('./data');

app.engine('mustache', mustache());
app.set('view engine', 'mustache');
app.set('views', __dirname + '/views');
// app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static('public'));
app.get('/', function(req, res){
  res.render('index', data);
});

// app.get('/data', function(req, res) {
//   res.json(data);
// });



app.listen(5687, function(){
  console.log('Here we go, port 5687!');
});
