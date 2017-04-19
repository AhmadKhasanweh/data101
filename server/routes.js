let installationController = require('./controllers/installation.js');

module.exports = (app, express) => {
  
  app.get('/api/installation', installationController.export);
  app.post('/api/installation', installationController.import);

}