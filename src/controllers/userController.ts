import { Request, Response } from "express";
import {
  createUserService,
  getUsersService,
  getUserByIdService,
  updateUserService,
  deleteUserService,
} from "../services/user.service";
import { successResponse, errorResponse } from "../utils/response";

export const createUser = async (req: Request, res: Response) => {
  try {
    const user = await createUserService(req.body);
    return successResponse(res, user, "User created", 201);
  } catch (error) {
    return errorResponse(res, "Error creating user", error, 400);
  }
};

export const getUsers = async (_req: Request, res: Response) => {
  try {
    const users = await getUsersService();
    return successResponse(res, users);
  } catch (error) {
    return errorResponse(res, "Error fetching users", error);
  }
};

export const getUserById = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id, 10);
    const user = await getUserByIdService(id);
    if (!user) return errorResponse(res, "User not found", null, 404);
    return successResponse(res, user);
  } catch (error) {
    return errorResponse(res, "Error fetching user", error);
  }
};

export const updateUser = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id, 10);
    const updated = await updateUserService(id, req.body);
    if (!updated) return errorResponse(res, "User not found", null, 404);
    return successResponse(res, updated, "User updated");
  } catch (error) {
    return errorResponse(res, "Error updating user", error, 400);
  }
};

export const deleteUser = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id, 10);
    const deleted = await deleteUserService(id);
    if (!deleted) return errorResponse(res, "User not found", null, 404);
    return successResponse(res, null, "User deleted");
  } catch (error) {
    return errorResponse(res, "Error deleting user", error);
  }
};
