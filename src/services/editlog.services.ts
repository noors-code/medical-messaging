import { EditLog } from "../models/Editlog";
import { Message } from "../models/Message";
import { User } from "../models/User.model";

export const createEditLogService = async (data: any) => {
  return await EditLog.create(data);
};

export const getAllEditLogsService = async () => {
  return await EditLog.findAll({
    include: [
      { model: Message, as: "message" },
      { model: User, as: "editedBy" },
    ],
    order: [["createdAt", "DESC"]],
  });
};

export const getEditLogByIdService = async (id: number) => {
  return await EditLog.findByPk(id, {
    include: [
      { model: Message, as: "message" },
      { model: User, as: "editedBy" },
    ],
  });
};

export const updateEditLogService = async (id: number, data: any) => {
  const log = await EditLog.findByPk(id);
  if (!log) return null;
  await log.update(data);
  return log;
};

export const deleteEditLogService = async (id: number) => {
  const log = await EditLog.findByPk(id);
  if (!log) return null;
  await log.destroy();
  return log;
};
