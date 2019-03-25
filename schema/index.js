const buildschema = require('graphql').buildSchema

const schema = buildschema(`
  type Client {
    id: ID
    name: String
    lastName: String
    emails: [Email]
    company: String
    type: typeClient
    orders: [order]
  }
  type Email {
    email: String
  }
  type order {
    product: String
    price: Float
  }
  enum typeClient {
    BASIC
    PREMIUN
  }
  type Query {
    getClient(id: ID): Client
  }
  input inputEmail {
    email: String
  }
  input inputOrder {
    product: String
    price: Float
  }
  input ClientInput {
    id: ID
    name: String!
    lastName: String!
    company: String!
    emails: [inputEmail]
    type: typeClient!
    orders: [inputOrder]
  }
  type Mutation {
    addClient(input: ClientInput) : Client
  }
`)

module.exports = schema
