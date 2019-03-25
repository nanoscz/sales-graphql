const makeExecutableSchema = require('graphql-tools').makeExecutableSchema
const importSchema = require('graphql-import').importSchema
const { resolvers } = require('../resolver')

const typeDefs = importSchema('./graphql/schema.graphql')
const schema = makeExecutableSchema({ typeDefs, resolvers })

module.exports = { schema }
