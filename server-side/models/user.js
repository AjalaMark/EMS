const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  FirstName: String,
  LastName: String,
  Age: Number,
  DateOfJoining: Date,
  Title: {
    type: String,
    enum: ["Employee", "Manager", "Director", "VP"],
  },
  Department: {
    type: String,
    enum: ["IT", "Marketing", "HR", "Engineering"],
  },
  EmployeeType: {
    type: String,
    enum: ["FullTime", "PartTime", "Contract", "Seasonal"],
  },
  CurrentStatus: {
    type: String,
    default: "Working",
  },
});

const User = mongoose.model("User", userSchema);

module.exports = { User };
