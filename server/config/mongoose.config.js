const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/mongoose_demo', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});