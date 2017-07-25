const express = require('express');
const mustache = require('mustache-express');

const app = express();

app.engine('mustache', mustache());
app.set('view engine', mustache);
app.set('views', __dirname + '/views');

app.listen(5687, function(){
  console.log('Here we go!');
})
