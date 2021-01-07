const mongoose = require('mongoose')


const deerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: String,
  img: String,
  price: {type: Number, min: 0 },
  qty: { type: Number, min: 0}
})

const Deer = mongoose.model('Deer', deerSchema)

module.exports = Deer
