import React from "react";
import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import { GET_USER_BY_ID } from "../graphqlQueries";
import Navigation from "./Navigation";

const EmployeeDetails = () => {
  const { id } = useParams();
  const { loading, error, data } = useQuery(GET_USER_BY_ID, {
    variables: { id },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const employee = data.getUserById;

  return (
    <div className="employee-details-container">
      <Navigation />
      <div className="employee-details">
        <h1>Employee Details</h1>
        {employee ? (
          <div>
            <p>
              <strong>Name:</strong> {employee.FirstName} {employee.LastName}
            </p>
            <p>
              <strong>Age:</strong> {employee.Age}
            </p>
            <p>
              <strong>Date of Joining: {employee.DateOfJoining}</strong>
            </p>
            <p>
              <strong>Title:</strong> {employee.Title}
            </p>
            <p>
              <strong>Department:</strong> {employee.Department}
            </p>
            <p>
              <strong>Employee Type:</strong> {employee.EmployeeType}
            </p>
            <p>
              <strong>Current Status:</strong> {employee.CurrentStatus}
            </p>
          </div>
        ) : (
          <p>Employee not found</p>
        )}
      </div>
    </div>
  );
};

export default EmployeeDetails;
