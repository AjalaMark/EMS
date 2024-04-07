const gql = require("graphql-tag");

const typeDefs = gql`
  type User {
    _id: ID
    FirstName: String
    LastName: String
    Age: Int
    DateOfJoining: String
    Title: String
    Department: String
    EmployeeType: String
    CurrentStatus: String
  }

  type Query {
    getAllUsers: [User]
    getUserById(id: ID!): User
  }

  type Mutation {
    createUser(
      FirstName: String
      LastName: String
      Age: Int
      DateOfJoining: String
      Title: String
      Department: String
      EmployeeType: String
      CurrentStatus: String
    ): User

    updateUser(id: ID!, input: UpdateUserInput!): User

    deleteUser(id: ID!): User
  }

  input UpdateUserInput {
    Title: String
    Department: String
    CurrentStatus: String
  }
`;

module.exports = { typeDefs };
