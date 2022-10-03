import { NextFunction, Request, Response } from "express";

export const apiErrorHandler = (error: any, reqest: Request, response: Response, next: NextFunction) => {
    response
    .setHeader('Content-Type', 'application/json')
    .status(500)
    .send({ error: error?.message || JSON.stringify(error) });
    next(error);
  }