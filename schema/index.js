const buildschema = require('graphql').buildSchema

const schema = buildschema(`
  type Client {
    id: ID
    name: String
    lastName: String
    emails: [Email]
    company: String
  }
  type Email {
    email: String
  }
  type Query {
    client: Client
  }
  input ClientInput {
    id: ID
    name: String!
    lastName: String!
    company: String!
  }
  type Mutation {
    addClient(input: ClientInput) : Client
  }
`)

module.exports = schema
