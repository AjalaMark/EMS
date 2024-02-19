import { gql } from "@apollo/client";

export const CREATE_USER = gql`
  mutation CreateUser(
    $FirstName: String!
    $LastName: String!
    $Age: Int!
    $DateOfJoining: String!
    $Title: String!
    $Department: String!
    $EmployeeType: String!
    $CurrentStatus: String!
  ) {
    createUser(
      FirstName: $FirstName
      LastName: $LastName
      Age: $Age
      DateOfJoining: $DateOfJoining
      Title: $Title
      Department: $Department
      EmployeeType: $EmployeeType
      CurrentStatus: $CurrentStatus
    ) {
      _id
      FirstName
      LastName
      Age
      DateOfJoining
      Title
      Department
      EmployeeType
      CurrentStatus
    }
  }
`;
