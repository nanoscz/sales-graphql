'use strict'

const { ApolloServer } = require('apollo-server-express')
const express = require('express')
const port = process.PORT || 4000

const { resolvers } = require('./graphql/resolver')
const { typeDefs } = require('./graphql/schema')

const chalk = require('chalk')

const app = express()
const server  = new ApolloServer({typeDefs, resolvers})
server.applyMiddleware({app})

app.listen(port, () => console.log(`${chalk.green('[Running]')}, 
    Server: http://localhost:${port}${server.graphqlPath}`))