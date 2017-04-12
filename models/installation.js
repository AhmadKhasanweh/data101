let mongoose = require('mongoose');

let Installations = new mongoose.Schema({
  objectId: {
    type: String,
    required: true,
    unique: true 
  },
  name: {
    type: string
  }
  
});
module.exports = mongoose.model('Installations', Installations);