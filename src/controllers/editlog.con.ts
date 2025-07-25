import { Request, Response } from "express";
import {
  createEditLogService,
  getAllEditLogsService,
  getEditLogByIdService,
  updateEditLogService,
  deleteEditLogService,
} from "../services/editlog.services";
import { success, error } from "../utils/response";

export const createEditLog = async (req: Request, res: Response) => {
  try {
    const saved = await createEditLogService(req.body);
    return success(res, saved, "Edit log created", 201);
  } catch (err: any) {
    return error(res, err.message, 400);
  }
};

export const getAllEditLogs = async (_req: Request, res: Response) => {
  try {
    const logs = await getAllEditLogsService();
    return success(res, logs);
  } catch (err: any) {
    return error(res, err.message);
  }
};

export const getEditLogById = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id, 10);
    const log = await getEditLogByIdService(id);
    if (!log) return error(res, "Edit log not found", 404);
    return success(res, log);
  } catch (err: any) {
    return error(res, err.message);
  }
};

export const updateEditLog = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id, 10);
    const updated = await updateEditLogService(id, req.body);
    if (!updated) return error(res, "Edit log not found", 404);
    return success(res, updated, "Edit log updated");
  } catch (err: any) {
    return error(res, err.message, 400);
  }
};

export const deleteEditLog = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id, 10);
    const deleted = await deleteEditLogService(id);
    if (!deleted) return error(res, "Edit log not found", 404);
    return success(res, { id: deleted }, "Edit log deleted");
  } catch (err: any) {
    return error(res, err.message);
  }
};
