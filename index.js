let express = require('express');
let mongoose = require('mongoose');
let app = express();
// let router = express.Router();
let port = process.env.PORT || 3001;

require('./server/middleware.js') (app,express);
require('./server/routes.js') (app,express);

app.listen(port, function() {
 console.log(`api running on port ${port}`);
});

mongoose.connect('mongodb://localhost:27017/data101');

let db = mongoose.connection;
db.once('open', function () {
  console.log(`mongoose is working on 27017`);
})