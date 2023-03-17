const exprees = require('express');
const gamesRouter = require('./routes/gamesRouter.consumer');
const loginRouter = require('./routes/loginRouter.consumer');
const registerRouter = require('./routes/registerRouter.consumer');

const app = exprees();

app.use(exprees.json());

app.use('/games', gamesRouter);

app.use('/login', loginRouter);

app.use('register', registerRouter);

module.exports = app;