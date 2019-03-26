'use strict'

const mongoose =  require('mongoose')

mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost/sales', { useNewUrlParser: true })

//define client schema 
const clientSchema = new mongoose.Schema({
  name: String,
  lastName: String,
  emails: Array,
  company: String,
  type: String,
  orders: Array,
})

const Clients = mongoose.model('clients', clientSchema)

module.exports = { Clients }