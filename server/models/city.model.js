const mongoose = require('mongoose');

const requiredErrMsg = '{PATH} is required.';
const minlengthErrMsg = '{PATH} must be at least {MINLENGTH} characters';

const CitySchema = new mongoose.Schema({
  name: {
    type: String,
    required: [
      true,
      requiredErrMsg
    ],
    minlength: [
      2,
      minlengthErrMsg
    ]
  },
  population: {
    type: Number,
    required: [
      true,
      requiredErrMsg
    ]
  },
  imgUrl: {
    type: String,
    required: [
      true,
      requiredErrMsg
    ]
  }
}, { timestamps: true });

const City = mongoose.model('City', CitySchema);

module.exports = City;