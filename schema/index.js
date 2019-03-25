const buildschema = require('graphql').buildSchema

const schema = buildschema(`
  type Client {
    id: ID
    name: String
    lastName: String
    email: String
    company: String
  }
  type Query {
    client: Client
  }
`)

module.exports = schema