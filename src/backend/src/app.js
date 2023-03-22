const exprees = require('express');
const routes = require('./routes')


const app = exprees();

app.use(exprees.json());

app.use('/games', routes.product);

app.use('/login', routes.login);

app.use('/user', routes.user);

app.use('/category', routes.category);

module.exports = app;