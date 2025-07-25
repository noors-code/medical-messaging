import { User } from "../models/User.model"; 

export const createUserService = async (data: any) => {
  return await User.create(data);
};

export const getUsersService = async () => {
  return await User.findAll(); //  Sequelize equivalent of .find()
};

export const getUserByIdService = async (id: number) => {
  return await User.findByPk(id); //  Sequelize uses .findByPk()
};

export const updateUserService = async (id: number, data: any) => {
  const user = await User.findByPk(id);
  if (!user) return null;
  await user.update(data);
  return user;
};

export const deleteUserService = async (id: number) => {
  const user = await User.findByPk(id);
  if (!user) return null;
  await user.destroy();
  return user;
};
