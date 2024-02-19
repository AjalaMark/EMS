import React, { useState } from "react";
import EmployeeSearch from "./EmployeeSearch";
import EmployeeCreate from "./EmployeeCreate";
import EmployeeTable from "./EmployeeTable";

const EmployeeDirectory = () => {
  const [filterParams, setFilterParams] = useState({});
  const [newUserData, setNewUserData] = useState([]);

  const handleSearch = (searchTerm) => {
    //logic
    return setFilterParams({ searchTerm });
  };
  return (
    <div>
      <h1 className="employee-directory-header">Welcome Admin</h1>
      <EmployeeSearch onSearch={handleSearch} />
      <EmployeeCreate setNewUserData={setNewUserData} />
      <EmployeeTable filterParams={filterParams} newUserData={newUserData} />
    </div>
  );
};

export default EmployeeDirectory;
