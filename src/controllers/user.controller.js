import userService from "../services/user.service.js";

const createUser = async (req, res) => {
  try {
    const newUserData = req.body;
    const user = await userService.createUser(newUserData);
    res.status(201).json({
      data: user,
      message: "User created successfully",
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const getAllUsers = async (req, res) => {
  try {
    const users = await userService.getAllUsers();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getUserById = async (req, res) => {
  try {
    const userId = parseInt(req.params.id);
    const user = await userService.getUserById(userId);
    res.status(200).json(user);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const editUserById = async (req, res) => {
  try {
    const userId = parseInt(req.params.id);
    const userData = req.body;
    const user = await userService.editUserById(userId, userData);
    res.status(200).json({
      data: user,
      message: "User updated successfully",
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export default {
  createUser,
  getAllUsers,
  getUserById,
  editUserById,
};