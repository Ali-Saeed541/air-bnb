const express = require('express');

const indexRouter = require('./indexRoute');
const loginRouter = require('./loginRoute');
const welcomeRouter = require('./welcomeRoute');
const registerRouter= require('./registerRoute');

const rout = express.Router();

rout.get('/', indexRouter);
rout.get('/login.html', loginRouter);
rout.post('/welcome.html', welcomeRouter);
rout.post('/register.html', registerRouter);

module.exports = rout;
