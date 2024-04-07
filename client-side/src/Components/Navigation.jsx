import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div>
      <nav>
        <ul className="nav-list">
          <div className="logo">
            <h2>
              <Link to="/">Mark</Link>
            </h2>
          </div>
          <div className="nav-items">
            <li className="nav-link">
              <Link to="/">Home</Link>
            </li>
            <li className="nav-link">
              <Link to="/create">Create</Link>
            </li>
            <li className="nav-link">
              <Link to="/list">List</Link>
            </li>
          </div>
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
