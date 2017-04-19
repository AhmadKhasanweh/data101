let installationModel = require('../models/installation.js');
let fs = require('fs');
let path = require('path');

module.exports = {
  
  export: (req, res) => {
    installationModel.find({}).exec(function (err, data) {
      res.send(data);
    })
  }, 

  import: (req, res) => {
    let dir = path.join(__dirname, '../../data/installation.json');
    let data = fs.readFile(dir, function (err, data) {
      if (err) {
        if (err.code === 'ENOENT') {
          console.error('myfile does not exist');
          return;
        }
        throw err;
      }
      fixedData = JSON.parse(data);
      installationModel.insertMany(fixedData.results, function (err, docs) {
        if (err) {
          console.log(err);
        }
      });
      res.send(fixedData.results);
    }); 
  }
}