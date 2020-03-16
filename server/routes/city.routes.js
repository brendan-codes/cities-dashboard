const cityController = require('../controllers/city.controller');

// export a function to be called and passed the app
module.exports = (app) => {

  app.get('/api/cities', cityController.getAll);

  app.get('/api/cities/:id', cityController.getOne);

  app.post('/api/cities', cityController.create);

  app.put('/api/cities/:id', cityController.update);

  app.delete('/api/cities/:id', cityController.delete);
}