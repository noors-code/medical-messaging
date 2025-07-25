import { Message } from '../models/Message';
import { User } from '../models/User.model';
import { Group } from '../models/Group';


export const createMessageService = async (data: any) => {
  return await Message.create(data);
};


export const getAllMessagesService = async () => {
  return await Message.findAll({
    include: [
      { model: User, as: 'sender' },
      { model: Group, as: 'group' },
    ],
    order: [['createdAt', 'DESC']],
  });
};


export const getMessageByIdService = async (id: number) => {
  return await Message.findByPk(id, {
    include: [
      { model: User, as: 'sender' },
      { model: Group, as: 'group' },
    ],
  });
};


export const updateMessageService = async (id: number, data: any) => {
  const message = await Message.findByPk(id);
  if (!message) return null;
  await message.update(data);
  return message;
};


export const deleteMessageService = async (id: number) => {
  const message = await Message.findByPk(id);
  if (!message) return null;
  await message.destroy();
  return message;
};
