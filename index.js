const express = require('express')
const app = express()
const graphqlHTTP = require('express-graphql')
const schema = require('./schema')

const chalk = require('chalk')

class Client {
  constructor (id, { name, lastName, company }) {
    this.id = id
    this.name = name
    this.lastName = lastName
    this.company = company
  }
}

const clientsDB = {}

const root = { client: () => {
  return {
    id: 1,
    name: 'fernando',
    lastName: 'Castillo Torrico',
    emails: [
      { email: 'fernandocto.scz@gmail.com' },
      { email: 'nanoscz@gmail.com' }
    ],
    company: 'sorbaSoft'
  }
},
addClient: ({ input }) => {
  const id = require('crypto').randomBytes(10).toString('hex')
  clientsDB[id] = input
  return new Client(id, input)
}
}

app.use('/', graphqlHTTP({
  schema,
  rootValue: root,
  graphiql: true
}))

app.listen(8000, () => console.log(`${chalk.green('[Running]')} Server listen port 8000.`))
