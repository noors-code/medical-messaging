import { Group } from "../models/Group";
import {User} from "../models/User.model";

export const createGroupService = async (data: any) => {
  return await Group.create(data);
};

export const getAllGroupsService = async () => {
  return await Group.findAll({
    include: [{ model: User, as: 'members' }],
    order: [['createdAt', 'DESC']],
  });
};

export const getGroupByIdService = async (id: number) => {
  return await Group.findByPk(id, {
    include: [{ model: User, as: 'members' }],
  });
};

export const updateGroupService = async (id: number, data: any) => {
  const group = await Group.findByPk(id);
  if (!group) return null;
  await group.update(data);
  return group;
};

export const deleteGroupService = async (id: number) => {
  const group = await Group.findByPk(id);
  if (!group) return null;
  await group.destroy();
  return group;
};
