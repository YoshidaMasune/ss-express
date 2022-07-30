const mongoose = require('mongoose');

const addressSchema = mongoose.Schema({
   section: Number,
   foor: Number,
   room: Number,
   miter: [Number],
})

module.exports = mongoose.model('Address', addressSchema);