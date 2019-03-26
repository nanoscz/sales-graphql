'use strict'

const { Clients } = require('../../db')

const resolvers = {
  Query: {
    getClientByID: (root, { id }) => {
      return new Promise((resolve, reject) => {
        Clients.findById({ _id: id }, (error, client) => {
          if (error) reject(error)
          else resolve(client)
        })
      })
    },
    getClients: (root, {limit}) => {
      return new Promise((resolve, reject) => {
        Clients.find({}, (error, clients)=> {
          if (error) reject(error)
          else resolve(clients)
        }).limit(limit)
      })
    }
  },
  Mutation: {
    addClient: (root, { input }) => {
      const newClient = Clients({
        name: input.name,
        lastName: input.lastName,
        emails: input.emails,
        company: input.company,
        type: input.type,
        orders: input.orders,
      })
      newClient.id = newClient._id
      return new Promise((resolve, reject) => {
        newClient.save(error => {
          if (error) reject(error)
          else resolve(newClient)
        })
      })
    },
    updateClient: (root, { input }) => {
      return new Promise((resolve, reject) => {
        Clients.findOneAndUpdate({ _id: input.id }, input, { new: true }, (error, client) => {
          if (error) reject(error)
          else resolve(client)
        })
      })
    },
    deleteClient: (root, { id }) => {
      return new Promise((resolve, reject) => {
        Clients.findOneAndDelete({ _id: id }, error => {
          if (error) reject(error)
          else resolve('Delete Successfull.')
        })
      })
    }
  }
}

module.exports = { resolvers }
