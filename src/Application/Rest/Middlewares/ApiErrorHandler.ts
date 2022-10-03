import { NextFunction, Request, Response } from "express";

export const apiErrorHandler = (error: any, reqest: Request, response: Response, next: NextFunction) => {
    response
    .status(500)
    .json({ error: error?.message || JSON.stringify(error) });
    next(error);
  }