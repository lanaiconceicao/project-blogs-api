const express = require('express');
const bodyParser = require('body-parser');
require('dotenv/config');
const User = require('./controllers/User');
const validateUser = require('./controllers/middlewares/validateUserMiddleware');
const validateJWT = require('./controllers/middlewares/validateJWTMiddleware');

const app = express();
app.use(bodyParser.json());

// Requisito 1
app.post('/user',
  validateUser.validateName,
  validateUser.validateEmail,
  validateUser.validatePassword,
  User.add);

// Requisito 3
app.get('/user',
validateJWT.validateJWTMiddleware,
User.getAll);

app.get('/products/:id',
validateJWT.validateJWTMiddleware,
User.getById);

app.listen(3000, () => console.log('ouvindo porta 3000!'));

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});
