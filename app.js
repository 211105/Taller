const express = require('express');
const bodyParser = require('body-parser');
const gameRoutes = require('./src/routers/gameRouters')

const app = express();

const  port = 3000;

app.use(bodyParser.json());

app.use('/api', gameRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});