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
export default {
  createUser,
};