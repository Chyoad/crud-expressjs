import userRepository from "../repositories/user.repository.js";

const createUser = async (newUserData) => {
  const user = await userRepository.insertUser(newUserData);
  return user;
};

export default {
  createUser,
};