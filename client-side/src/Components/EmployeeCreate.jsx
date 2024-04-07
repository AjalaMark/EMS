import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { CREATE_USER } from "../graphqlQueries";

const EmployeeCreate = ({ setNewUserData }) => {
  const [newUser, setNewUser] = useState({
    FirstName: "",
    LastName: "",
    Age: "",
    DateOfJoining: "",
    Title: "",
    Department: "",
    EmployeeType: "",
    CurrentStatus: "",
  });

  const [createUser] = useMutation(CREATE_USER);

  const handleCreate = async () => {
    try {
      if (
        !newUser.FirstName ||
        !newUser.LastName ||
        !newUser.Age ||
        !newUser.DateOfJoining ||
        !newUser.Title ||
        !newUser.Department ||
        !newUser.EmployeeType ||
        !newUser.CurrentStatus
      ) {
        alert("Please fill out all fields.");
        return;
      }

      const { data } = await createUser({
        variables: {
          FirstName: newUser.FirstName,
          LastName: newUser.LastName,
          Age: parseInt(newUser.Age),
          DateOfJoining: newUser.DateOfJoining,
          Title: newUser.Title,
          Department: newUser.Department,
          EmployeeType: newUser.EmployeeType,
          CurrentStatus: newUser.CurrentStatus,
        },
      });

      setNewUserData((prevUserData) => [...prevUserData, data.createUser]);

      setNewUser({
        FirstName: "",
        LastName: "",
        Age: "",
        DateOfJoining: "",
        Title: "",
        Department: "",
        EmployeeType: "",
        CurrentStatus: "",
      });
    } catch (error) {
      console.error("Error creating user:", error.message);
    }
  };

  return (
    <div className="employee-create-container">
      <h2 className="employee-create-header">Create Employee</h2>
      <label className="input-label">
        First Name:
        <input
          className="input-field"
          type="text"
          value={newUser.FirstName}
          onChange={(e) =>
            setNewUser({ ...newUser, FirstName: e.target.value })
          }
        />
      </label>
      <label className="input-label">
        Last Name:
        <input
          className="input-field"
          type="text"
          value={newUser.LastName}
          onChange={(e) => setNewUser({ ...newUser, LastName: e.target.value })}
        />
      </label>
      <label className="input-label">
        Age:
        <input
          className="input-field"
          type="number"
          value={newUser.Age}
          onChange={(e) => setNewUser({ ...newUser, Age: e.target.value })}
        />
      </label>
      <label className="input-label">
        Date Of Joining:
        <input
          className="input-field"
          type="date"
          value={newUser.DateOfJoining}
          onChange={(e) =>
            setNewUser({ ...newUser, DateOfJoining: e.target.value })
          }
        />
      </label>
      <label className="input-label">
        Title:
        <select
          className="input-field"
          value={newUser.Title}
          onChange={(e) => setNewUser({ ...newUser, Title: e.target.value })}
        >
          <option value="">Select</option>
          <option value="Employee">Employee</option>
          <option value="Manager">Manager</option>
          <option value="Director">Director</option>
          <option value="VP">VP</option>
        </select>
      </label>

      <label className="input-label">
        Department:
        <select
          className="input-field"
          value={newUser.Department}
          onChange={(e) =>
            setNewUser({ ...newUser, Department: e.target.value })
          }
        >
          <option value="">Select</option>
          <option value="IT">IT</option>
          <option value="Marketing">Marketing</option>
          <option value="HR">HR</option>
          <option value="Engineering">Engineering</option>
        </select>
      </label>

      <label className="input-label">
        EmployeeType:
        <select
          className="input-field"
          value={newUser.EmployeeType}
          onChange={(e) =>
            setNewUser({ ...newUser, EmployeeType: e.target.value })
          }
        >
          <option value="">Select</option>
          <option value="FullTime">FullTime</option>
          <option value="PartTime">PartTime</option>
          <option value="Contract">Contract</option>
          <option value="Seasonal">Seasonal</option>
        </select>
      </label>

      <label className="input-label">
        Current Status:
        <select
          className="input-field"
          value={newUser.CurrentStatus}
          onChange={(e) =>
            setNewUser({ ...newUser, CurrentStatus: e.target.value })
          }
        >
          <option value="">Select</option>
          <option value="Working">Working</option>
          <option value="Leave">On Leave</option>
        </select>
      </label>

      <button className="create-button" onClick={handleCreate}>
        Create Employee
      </button>
    </div>
  );
};

export default EmployeeCreate;
