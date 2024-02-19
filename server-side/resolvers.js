// Resolvers
const { User } = require("./models/user.js");
const resolvers = {
  Query: {
    getAllUsers: async () => {
      return await User.find();
    },
  },
  Mutation: {
    createUser: async (parent, args) => {
      const {
        FirstName,
        LastName,
        Age,
        DateOfJoining,
        Title,
        Department,
        EmployeeType,
        CurrentStatus,
      } = args;
      const newUser = new User({
        FirstName,
        LastName,
        Age,
        DateOfJoining,
        Title,
        Department,
        EmployeeType,
        CurrentStatus,
      });
      await newUser.save();
      return newUser;
    },
  },
};

module.exports = { resolvers };
