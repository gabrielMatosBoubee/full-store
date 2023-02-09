const exprees = require('express');

const app = exprees();

app.use(exprees.json());

module.exports = app;