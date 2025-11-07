import prisma from "../config/db.js";

const insertUser = async (userData) => {
  const user = await prisma.user.create({
    data: {
      name: userData.name,
      email: userData.email,
    },
  });
  return user;
};

export default {
  insertUser,
};