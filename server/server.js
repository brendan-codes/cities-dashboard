const express = require('express');
const cors = require('cors');

require('./config/mongoose.config');

const app = express();
app.use(cors());
app.use(express.json());

require('./routes/city.routes')(app);

const port = 8000;
app.listen(port, () => console.log(`Listening on port ${port}`));