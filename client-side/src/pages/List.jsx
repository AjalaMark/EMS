import React from "react";
import { useQuery } from "@apollo/client";
import { GET_ALL_USERS } from "../graphqlQueries";
import Navigation from "../Components/Navigation";
import { Link } from "react-router-dom";

const List = () => {
  const { loading, error, data } = useQuery(GET_ALL_USERS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error fetching data: {error.message}</p>;
  const users = data.getAllUsers;

  return (
    <div className="list-page-container">
      <Navigation />
      <div className="user-row">
        {users.map((user) => (
          <Link key={user._id} to={`/create/employees/${user._id}`}>
            <div className="user-info">
              <h3>
                {user.FirstName} {user.LastName}
              </h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default List;
