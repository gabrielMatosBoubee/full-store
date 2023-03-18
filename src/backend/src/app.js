const exprees = require('express');
const gamesRouter = require('./routes/gamesRouter.consumer');
const routes = require('./routes')


const app = exprees();

app.use(exprees.json());

app.use('/games', gamesRouter);

app.use('/login', routes.login);

app.use('/user', routes.user);

app.use('/category', routes.category);

module.exports = app;