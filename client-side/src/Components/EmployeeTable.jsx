import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const EmployeeTable = ({
  filteredData,
  setFilteredData,
  onDelete,
  onUpdate,
  newUserData,
}) => {
  const [editableId, setEditableId] = useState(null);
  const [updatedFields, setUpdatedFields] = useState({});

  useEffect(() => {
    if (newUserData && newUserData.length > 0) {
      setFilteredData([...filteredData, ...newUserData]);
    }
  }, [newUserData]);

  const handleInputChange = (e, fieldName) => {
    setUpdatedFields({
      ...updatedFields,
      [fieldName]: e.target.value,
    });
  };

  const handleUpdateClick = (id) => {
    setEditableId(id);
    setUpdatedFields({
      Title: filteredData.find((user) => user._id === id).Title,
      Department: filteredData.find((user) => user._id === id).Department,
      CurrentStatus: filteredData.find((user) => user._id === id).CurrentStatus,
    });
  };

  const handleCancelClick = () => {
    setEditableId(null);
    setUpdatedFields({});
  };

  const handleSaveClick = () => {
    onUpdate(editableId, updatedFields);
    setEditableId(null);
    setUpdatedFields({});
  };

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
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((user, index) => (
            <tr key={index}>
              <td>
                <Link to={`/create/employees/${user._id}`}>
                  {user.FirstName}
                </Link>
              </td>
              <td>{user.LastName}</td>
              <td>{user.Age}</td>
              <td>{user.DateOfJoining}</td>
              <td>
                {editableId === user._id ? (
                  <select
                    value={updatedFields.Title || user.Title}
                    onChange={(e) => handleInputChange(e, "Title")}
                  >
                    <option value="Employee">Employee</option>
                    <option value="Manager">Manager</option>
                    <option value="Director">Director</option>
                    <option value="VP">VP</option>
                  </select>
                ) : (
                  user.Title
                )}
              </td>
              <td>
                {editableId === user._id ? (
                  <select
                    value={updatedFields.Department || user.Department}
                    onChange={(e) => handleInputChange(e, "Department")}
                  >
                    <option value="">Select</option>
                    <option value="IT">IT</option>
                    <option value="Marketing">Marketing</option>
                    <option value="HR">HR</option>
                    <option value="Engineering">Engineering</option>
                  </select>
                ) : (
                  user.Department
                )}
              </td>
              <td>{user.EmployeeType}</td>
              <td>
                {editableId === user._id ? (
                  <select
                    value={updatedFields.CurrentStatus || user.CurrentStatus}
                    onChange={(e) => handleInputChange(e, "CurrentStatus")}
                  >
                    <option value="">Select</option>
                    <option value="Working">Working</option>
                    <option value="Leave">On Leave</option>
                  </select>
                ) : (
                  user.CurrentStatus
                )}
              </td>
              <td>
                {editableId === user._id ? (
                  <>
                    <button onClick={handleSaveClick}>Save</button>
                    <button onClick={handleCancelClick}>Cancel</button>
                  </>
                ) : (
                  <button onClick={() => handleUpdateClick(user._id)}>
                    Update
                  </button>
                )}
                <button onClick={() => onDelete(user._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeTable;
