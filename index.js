const express = require('express');
const bodyParser = require('body-parser');
require('dotenv/config');
const User = require('./controllers/User');
const validateUser = require('./controllers/middlewares/validateUserMiddleware');

const app = express();
app.use(bodyParser.json());

app.post('/user',
  validateUser.validateName,
  validateUser.validateEmail,
  validateUser.validatePassword,
  User.add);

app.listen(3000, () => console.log('ouvindo porta 3000!'));

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});
