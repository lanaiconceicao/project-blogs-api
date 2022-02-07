const express = require('express');
const bodyParser = require('body-parser');
require('dotenv/config');

const UserController = require('./controllers/UserController');
const loginController = require('./controllers/LoginController');
const CategoriesController = require('./controllers/CategoriesController');

const validateUserMiddleware = require('./controllers/middlewares/validateUserMiddleware');
const validateJWT = require('./controllers/middlewares/validateJWTMiddleware');
const validateLoginMiddleware = require('./controllers/middlewares/validateLoginMiddleware');
const validateNameMiddleware = require('./controllers/middlewares/validateNameMiddleware');
const serverError = require('./controllers/middlewares/server-error');
const domainError = require('./controllers/middlewares/domain-error');

const app = express();

app.use(bodyParser.json());
app.use(domainError);
app.use(serverError);

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

// Requisito 4
app.get('/user/:id',
validateJWT.validateJWTMiddleware,
UserController.getById);

// Requisito 5
app.post('/categories',
  validateJWT.validateJWTMiddleware,
  validateNameMiddleware,
  CategoriesController.add);

app.listen(3000, () => console.log('ouvindo porta 3000!'));

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});
