var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var app = express();

mongoose.connect('mongodb://root:nothing@ds135049.mlab.com:35049/ahmed_6569_db' || process.env.MONGODB_URI);
db = mongoose.connection;
db.once('open', () => {
  console.log('mongoDB is open');
});
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static('./client'));

app.get('/', (req, res) => {
  res.send('Hello World!');
});

var PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log('server is listning ' + PORT);
});

module.exports = app;
