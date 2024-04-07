import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import EmployeeDetails from "./Components/EmployeeDetails";
import Home from "./pages/Home";
import Create from "./pages/Create";
import List from "./pages/List";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<Create />} />
        <Route path="/list" element={<List />} />
        <Route path="/create/employees/:id" element={<EmployeeDetails />} />
      </Routes>
    </Router>
  );
};

export default App;
