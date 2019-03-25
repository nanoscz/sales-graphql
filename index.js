const express = require('express')
const app = express()
const graphqlHTTP = require('express-graphql')

const schema = require('./schema')
const resolver = require('./resolver')

const chalk = require('chalk')

const root = resolver

app.use('/', graphqlHTTP({
  schema,
  rootValue: root,
  graphiql: true
}))

app.listen(8000, () => console.log(`${chalk.green('[Running]')} Server listen port 8000.`))
