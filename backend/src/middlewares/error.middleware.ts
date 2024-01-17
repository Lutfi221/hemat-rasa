import { NextFunction, Request, Response } from "express";
import { HttpException } from "@exceptions/HttpException";
import { logger } from "@utils/logger";
import { Envelope } from "@/types/envelope";

export const ErrorMiddleware = (
  error: HttpException,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const status: number = error.status || 500;
    const message: string = error.message || "An error occured";

    logger.error(
      `[${req.method}] ${req.path} >> StatusCode:: ${status}, Message:: ${message}`
    );
    console.trace(error);
    res.status(status).json(new Envelope(null, { errorMessage: message }));
  } catch (error) {
    next(error);
  }
};
