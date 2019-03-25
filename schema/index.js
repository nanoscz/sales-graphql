const buildschema = require('graphql').buildSchema

const schema = buildschema(`
  type Client {
    id: ID
    name: String
    lastName: String
    emails: [Email]
    company: String
    type: typeClient
  }
  type Email {
    email: String
  }
  enum typeClient {
    BASIC
    PREMIUN
  }
  type Query {
    getClient(id: ID): Client
  }
  input ClientInput {
    id: ID
    name: String!
    lastName: String!
    company: String!
    type: typeClient!
  }
  type Mutation {
    addClient(input: ClientInput) : Client
  }
`)

module.exports = schema
