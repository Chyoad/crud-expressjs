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

const findUsers = async () => {
  const users = await prisma.user.findMany();
  return users;
};

const findUserById = async (id) => {
  const user = await prisma.user.findUnique({
    where: { id },
  });
  return user;
};

export default {
  insertUser,
  findUsers,
  findUserById,
};