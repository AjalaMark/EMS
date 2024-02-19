import React from "react";
import "../App.css";
const EmployeeTable = ({ filterParams, newUserData }) => {
  const employeeData = [...newUserData];

  return (
    <div className="employee-table-container">
      <h2 className="employee-table-header">Employee Table</h2>
      <table className="employee-table">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Age</th>
            <th>Date Of Joining</th>
            <th>Title</th>
            <th>Department</th>
            <th>Employee Type</th>
            <th>Current Status</th>
          </tr>
        </thead>
        <tbody>
          {employeeData.map((data, index) => (
            <tr key={index}>
              <td>{data.FirstName}</td>
              <td>{data.LastName}</td>
              <td>{data.Age}</td>
              <td>{data.DateOfJoining}</td>
              <td>{data.Title}</td>
              <td>{data.Department}</td>
              <td>{data.EmployeeType}</td>
              <td>{(data.CurrentStatus = "Working")}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeTable;
