const City = require('../models/city.model');

// export an object that is full of methods
module.exports = {
  getAll(_req, res) {
    City.find()
      .then(cities => res.json(cities))
      .catch(err => res.json(err));
  },

  getOne(req, res) {
    City.findById(req.params.id)
      .then(city => res.json(city))
      .catch(err => res.json(err));
  },

  create(req, res) {
    City.create(req.body)
      .then(city => res.json(city))
      .catch(error => res.json(error));
  },

  update(req, res) {
    City.update(req.params.id, req.body, {runValidators: true, new: true})
      .then(updatedCity => res.json(updatedCity))
      .catch(updateError => res.json(updateError))
  },

  delete(req, res) {
    City.deleteOne(req.params.id)
      .then(city => res.json(city))
      .catch(err => res.json(err));
  },
}