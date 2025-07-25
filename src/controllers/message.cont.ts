import { Request, Response } from "express";
import {
  createMessageService,
  getAllMessagesService,
  getMessageByIdService,
  updateMessageService,
  deleteMessageService
} from "../services/message.service";

import { sendResponse } from "../utils/response";

export const createMessage = async (req: Request, res: Response) => {
  try {
    const message = await createMessageService(req.body);
    sendResponse(res, 201, { success: true, message: "Message created", data: message });
  } catch (error) {
    sendResponse(res, 400, { success: false, message: "Error creating message", error });
  }
};

export const getAllMessages = async (_req: Request, res: Response) => {
  try {
    const messages = await getAllMessagesService();
    sendResponse(res, 200, { success: true, message: "Messages fetched", data: messages });
  } catch (error) {
    sendResponse(res, 500, { success: false, message: "Error fetching messages", error });
  }
};

export const getMessageById = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id, 10);
    const message = await getMessageByIdService(id);
    if (!message) return sendResponse(res, 404, { success: false, message: "Not found" });
    sendResponse(res, 200, { success: true, message: "Message fetched", data: message });
  } catch (error) {
    sendResponse(res, 500, { success: false, message: "Error", error });
  }
};

export const updateMessage = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id, 10);
    const updated = await updateMessageService(id, req.body);
    if (!updated) return sendResponse(res, 404, { success: false, message: "Not found" });
    sendResponse(res, 200, { success: true, message: "Updated", data: updated });
  } catch (error) {
    sendResponse(res, 400, { success: false, message: "Update failed", error });
  }
};

export const deleteMessage = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id, 10);
    const deleted = await deleteMessageService(id);
    if (!deleted) return sendResponse(res, 404, { success: false, message: "Not found" });
    sendResponse(res, 200, { success: true, message: "Deleted" });
  } catch (error) {
    sendResponse(res, 500, { success: false, message: "Delete failed", error });
  }
};
