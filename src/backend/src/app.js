const exprees = require('express');
const routes = require('./routes')
const cors = require('cors')

const app = exprees();

app.use(exprees.json());

app.use(cors())

app.use('/products', routes.product);

app.use('/login', routes.login);

app.use('/user', routes.user);

app.use('/category', routes.category);

module.exports = app;