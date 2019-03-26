'use strict'

const mongoose = require('mongoose')
const { Client } = require('../../db')

const resolvers = {
  Query: {
    getClient: (root, { id }) => {
      return new Client(id, clientsDB[id])
    }
  },
  Mutation: {
    addClient: (root, { input }) => {
      const newClient = Client({
        name: input.name,
        lastName: input.lastName,
        emails: input.emails,
        company: input.company,
        type: input.type,
        orders: input.orders,
      })
      newClient.id = newClient._id
      return new Promise((resolve, object) => {
        newClient.save(error => {
          if (error) rejects(error)
          else resolve(newClient)
        })
      })
    }
  }
}

module.exports = { resolvers }
