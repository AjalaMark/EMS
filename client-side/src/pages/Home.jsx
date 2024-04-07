import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
import Navigation from "../Components/Navigation";

const Home = () => {
  return (
    <div className="home-container">
      <Navigation />
      <h1 className="home-header">Welcome Admin!</h1>
      <p>This is your Employee Management System.</p>
      <div className="home-buttons">
        <Link to="/create" className="create-button">
          Create New Employee
        </Link>
        <Link to="/list" className="create-button">
          View All Employees
        </Link>
      </div>
    </div>
  );
};

export default Home;
