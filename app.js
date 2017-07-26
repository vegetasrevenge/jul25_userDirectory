const express = require('express');
const mustache = require('mustache-express');
const app = express();
const data = require('./data');

app.use(express.static('public'));

//Doug clued this in: http://www.douglashirsh.com/2017/07/26/node-express-mustache-template-caching/
let mustacheInstance = mustache();
mustacheInstance.cache = null;
app.engine('mustache', mustacheInstance);

app.set('view engine', 'mustache');
app.set('views', __dirname + '/views');
// app.use(express.static(path.join(__dirname, 'public')));
//instead, use -->
app.get('/', function(req, res){
  res.render('index', data);
});

app.get('/details/:id', function(req, res) {
  let profile =
    data.users.find(function(item){
      return item.id == req.params.id;
    });
    res.render('details', profile);
    console.log(profile);
});

app.listen(5687, function(){
  console.log('Here we go, port 5687!');
});
