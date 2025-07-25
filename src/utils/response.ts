import { Response } from "express";

interface ApiResponse {
  success: boolean;
  message: string;
  data?: any;
  error?: any;
}

export const sendResponse = (
  res: Response,
  statusCode: number,
  options: ApiResponse
) => {
  const { success, message, data, error } = options;
  return res.status(statusCode).json({
    success,
    message,
    ...(data && { data }),
    ...(error && { error }),
  });
};

export const success = (res: any, data: any, message = "Success", code = 200) => {
  return res.status(code).json({ success: true, message, data });
};

export const error = (res: any, message = "Something went wrong", code = 500) => {
  return res.status(code).json({ success: false, message });
};
export const successResponse = (
  res: Response,
  data: any = null,
  message = "Success",
  status = 200
) => {
  return res.status(status).json({
    success: true,
    message,
    data,
  });
};

export const errorResponse = (
  res: Response,
  message = "Something went wrong",
  error: any = null,
  status = 500
) => {
  return res.status(status).json({
    success: false,
    message,
    error,
  });
};

