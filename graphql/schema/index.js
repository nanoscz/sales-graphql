'use strict'

const importSchema = require('graphql-import').importSchema
const typeDefs = importSchema('./graphql/schema.graphql')

module.exports = { typeDefs }
