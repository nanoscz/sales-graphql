const express = require('express')
const app = express()
const graphqlHTTP = require('express-graphql')
const schema = require('./schema')

const chalk = require('chalk')

const root = { client: () => {
  return {
    id: 1,
    name: 'fernando',
    lastName: 'Castillo Torrico',
    email: 'fernandocto.scz@gmail.com',
    company: 'sorbaSoft'
  }
}}

app.use('/', graphqlHTTP({
  schema,
  rootValue: root,
  graphiql: true
}))

app.listen(8000, () => console.log(`${chalk.green('[Running]')} Server listen port 8000.`))
