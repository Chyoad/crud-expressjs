import userRepository from "../repositories/user.repository.js";

const createUser = async (newUserData) => {
  const user = await userRepository.insertUser(newUserData);
  return user;
};

const getAllUsers = async () => {
  const users = await userRepository.findUsers();
  return users;
};

const getUserById = async (id) => {
  const user = await userRepository.findUserById(id);
  if (!user) {
    throw new Error("User not found");
  }
  return user;
};

export default {
  createUser,
  getAllUsers,
  getUserById,
};