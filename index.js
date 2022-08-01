require('dotenv').config();

const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose')

const usersRouter = require('./api/users');
const userRouter = require('./api/user')

const { DB_CONNECTION } = process.env;

// connect datebase
mongoose.connect(DB_CONNECTION)

const app = express();

// use MiddleWare
app.use(express.json());
app.use(cors());

app.get('/api', (req,res) => {
   res.send(200)
});

app.use('/api/users', usersRouter)

app.use('/api/user', userRouter)

app.listen(process.env.PORT)
module.exports = app;