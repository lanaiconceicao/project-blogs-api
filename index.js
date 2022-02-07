const express = require('express');
const bodyParser = require('body-parser');
require('dotenv/config');
const UserController = require('./controllers/UserController');
const validateUserMiddleware = require('./controllers/middlewares/validateUserMiddleware');
const validateJWT = require('./controllers/middlewares/validateJWTMiddleware');
const validateLoginMiddleware = require('./controllers/middlewares/validateLoginMiddleware');
const loginController = require('./controllers/LoginController');
// const errorMiddleware = require('./controllers/middlewares/errorMiddleware');

const app = express();
app.use(bodyParser.json());
// app.use(errorMiddleware);

// Requisito 1
app.post('/user',
  validateUserMiddleware.validateName,
  validateUserMiddleware.validateEmail,
  validateUserMiddleware.validatePassword,
  UserController.add);

// Requisito 2
app.post('/login',
  validateLoginMiddleware.validateEmail,
  validateLoginMiddleware.validatePassword,
  validateLoginMiddleware.validateLogin,
  loginController);

// Requisito 3
app.get('/user',
validateJWT.validateJWTMiddleware,
UserController.getAll);

app.get('/products/:id',
validateJWT.validateJWTMiddleware,
UserController.getById);

app.listen(3000, () => console.log('ouvindo porta 3000!'));

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});
