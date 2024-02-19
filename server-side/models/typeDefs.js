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
  }
`;

module.exports = { typeDefs };
