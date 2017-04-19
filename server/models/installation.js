var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var installationSchema = new Schema({
  installationId: {
    type: String,
    required: true
  }
}, {strict: false});

module.exports = mongoose.model('installations', installationSchema);