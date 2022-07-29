require('dotenv').config()
const http = require('http');
const index = require('./index.js')

const { PORT } = process.env;

http.createServer(index).listen(PORT, () => {
   console.log(` http://localhost:${PORT}/api`)
})