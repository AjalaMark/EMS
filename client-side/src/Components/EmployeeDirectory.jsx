import React, { useState, useEffect } from "react";
import EmployeeSearch from "./EmployeeSearch";
import EmployeeCreate from "./EmployeeCreate";
import EmployeeTable from "./EmployeeTable";
import { useQuery } from "@apollo/client";
import { GET_ALL_USERS, UPDATE_USER, DELETE_USER } from "../graphqlQueries";
import { useMutation } from "@apollo/client";

const EmployeeDirectory = () => {
  const { loading, error, data } = useQuery(GET_ALL_USERS);
  const [newUserData, setNewUserData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [updateUser] = useMutation(UPDATE_USER);
  const [deleteUser] = useMutation(DELETE_USER);

  useEffect(() => {
    if (!loading && !error) {
      setFilteredData(data.getAllUsers);
    }
  }, [loading, error, data]);

  const handleSearch = (searchTerm) => {
    if (searchTerm === "") {
      setFilteredData(data.getAllUsers);
    } else {
      const filteredUsers = data.getAllUsers.filter((user) => {
        return (
          user.FirstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
          user.LastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
          user.Age.toString()
            .toLowerCase()
            .includes(searchTerm.toLowerCase()) ||
          user.Department.toLowerCase().includes(searchTerm.toLowerCase()) ||
          user.Title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          user.EmployeeType.toLowerCase().includes(searchTerm.toLowerCase()) ||
          user.CurrentStatus.toLowerCase().includes(searchTerm.toLowerCase())
        );
      });
      setFilteredData(filteredUsers);
    }
  };

  const onDelete = async (id) => {
    try {
      await deleteUser({ variables: { id } });
      setFilteredData(filteredData.filter((user) => user._id !== id));
      console.log("User Deleted");
    } catch (error) {
      console.error("Error deleting employee:", error);
    }
  };

  const onUpdate = async (id, updatedFields) => {
    try {
      await updateUser({ variables: { id, input: updatedFields } });
      const updatedData = filteredData.map((user) => {
        if (user._id === id) {
          return { ...user, ...updatedFields };
        }
        return user;
      });
      setFilteredData(updatedData);
    } catch (error) {
      console.error("Error updating employee:", error);
    }
  };

  return (
    <div>
      <EmployeeSearch onSearch={handleSearch} />
      <EmployeeCreate setNewUserData={setNewUserData} />
      <EmployeeTable
        newUserData={newUserData}
        setFilteredData={setFilteredData}
        filteredData={filteredData}
        onDelete={onDelete}
        onUpdate={onUpdate}
      />
    </div>
  );
};

export default EmployeeDirectory;
