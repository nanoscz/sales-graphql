const buildschema = require('graphql').buildSchema

const schema = buildschema(`
  type Query {
    message: String
  }
`)

module.exports = schema
