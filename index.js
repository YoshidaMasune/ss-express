const express = require('express');
const app = express();
const users = require('./api/users');

app.post('/api/createuser', (req,res) => {
   const { name, jaya, section, foor, room, miter } = req.body;
});

app.get('/api/users', (req, res)  => {
   res.json({
      status: 200
   })
});

module.exports = app;