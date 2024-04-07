// Resolvers
const { User } = require("./models/user.js");
const resolvers = {
  Query: {
    getAllUsers: async () => {
      return await User.find();
    },
    getUserById: async (_, { id }) => {
      return await User.findById(id);
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
    updateUser: async (_, { id, input }) => {
      try {
        const updatedUser = await User.findByIdAndUpdate(id, input, {
          new: true,
        });
        return updatedUser;
      } catch (error) {
        throw new Error("Failed to update employee");
      }
    },
    deleteUser: async (_, { id }) => {
      try {
        const deletedUser = await User.findByIdAndDelete(id);
        return deletedUser;
      } catch (error) {
        throw new Error("Failed to delete employee");
      }
    },
  },
};

module.exports = { resolvers };
