
const mongoose = require('mongoose');

const usersSchema = mongoose.Schema({
   name: {
      type: String
   },
   jaya: {
      type: String
   },
   address: {
      type: String
   }
})

module.exports = mongoose.model('Users', usersSchema);