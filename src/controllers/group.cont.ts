import { Request, Response } from "express";
import {
  createGroupService,
  getAllGroupsService,
  getGroupByIdService,
  updateGroupService,
  deleteGroupService,
} from "../services/group.service";
import { successResponse, errorResponse } from "../utils/response";

export const createGroup = async (req: Request, res: Response) => {
  try {
    const group = await createGroupService(req.body);
    return successResponse(res, group, "Group created", 201);
  } catch (error) {
    return errorResponse(res, "Error creating group", error, 400);
  }
};

export const getAllGroups = async (_req: Request, res: Response) => {
  try {
    const groups = await getAllGroupsService();
    return successResponse(res, groups);
  } catch (error) {
    return errorResponse(res, "Error fetching groups", error);
  }
};

export const getGroupById = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id, 10);
    const group = await getGroupByIdService(id);
    if (!group) return errorResponse(res, "Group not found", null, 404);
    return successResponse(res, group);
  } catch (error) {
    return errorResponse(res, "Error fetching group", error);
  }
};

export const updateGroup = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id, 10);
    const group = await updateGroupService(id, req.body);
    if (!group) return errorResponse(res, "Group not found", null, 404);
    return successResponse(res, group, "Group updated");
  } catch (error) {
    return errorResponse(res, "Error updating group", error, 400);
  }
};

export const deleteGroup = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id, 10);
    const group = await deleteGroupService(id);
    if (!group) return errorResponse(res, "Group not found", null, 404);
    return successResponse(res, null, "Group deleted");
  } catch (error) {
    return errorResponse(res, "Error deleting group", error);
  }
};
