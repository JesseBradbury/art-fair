const typeDefs = `
  type User {
    _id: ID
    username: String
    email: String!
    password: String!
    FavArtists: [Artist]
  }

  type Artist {
    id: ID
    name: String
    description: String
    location: String
    image: [String]
    products: [Product]
  }


  type Product {
    _id: ID
    productName: String
    price: Int
    isActive: Boolean
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    user(username: String!): User
    artist(artist: String!): Artist
    product(id: ID!): Product
    products(username: String): [Product]
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    addArtist(name: String!, description: String!, location: String!, image: [String]!, products: [ID]!): Artist
    removeArtist(id: ID!): Artist
    addProduct(artistId: ID!, productName: String!, price: Int!, isActive: Boolean!): Product
    removeProduct(productId: ID!): Product
  }
`;

module.exports = typeDefs;
