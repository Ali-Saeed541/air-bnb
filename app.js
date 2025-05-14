const express = require('express');
const rout = require('./routes/route');

const app = express();
app.use(express.urlencoded());

app.use('/', rout);

const port = 3000;

app.listen(port, ()=>{console.log("server started successfully")});