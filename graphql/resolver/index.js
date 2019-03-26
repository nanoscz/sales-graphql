
class Client {
  constructor (id, { name, lastName, company, emails, type, orders }) {
    console.log(id, { name, lastName, company, emails, type, orders });
    this.id = id
    this.name = name
    this.lastName = lastName
    this.emails = emails
    this.company = company
    this.type = type
    this.orders = orders
  }
}

const clientsDB = {}

const resolvers = {
  Query: {
    getClient: ({ id }) => {
      return new Client(id, clientsDB[id])
    }
  },
  Mutation: {
    addClient: ({ input }) => {
      const id = require('crypto').randomBytes(10).toString('hex')
      clientsDB[id] = input
      return new Client(id, input)
    }
  }
}

module.exports = { resolvers }