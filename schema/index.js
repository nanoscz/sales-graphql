const buildschema = require('graphql').buildSchema

const schema = buildschema(`
  """ Type Client """
  type Client {
    id: ID
    name: String
    lastName: String
    emails: [Email]
    company: String
    type: typeClient
    orders: [order]
  }
  """ Array Emails """
  type Email {
    email: String
  }
  """ Type Order """
  type order {
    product: String
    price: Float
  }
  """ Types Client """
  enum typeClient {
    BASIC
    PREMIUN
  }
  """ Get Clients """
  type Query {
    getClient(id: ID): Client
  }
  """ Fields Emails """
  input inputEmail {
    email: String
  }
  """ Fields Order """
  input inputOrder {
    product: String
    price: Float
  }
  """ Fields new Client """
  input ClientInput {
    id: ID
    name: String!
    lastName: String!
    company: String!
    emails: [inputEmail]
    type: typeClient!
    orders: [inputOrder]
  }
  """ Mutation add new client"""
  type Mutation {
    addClient(input: ClientInput) : Client
  }
`)

module.exports = schema
