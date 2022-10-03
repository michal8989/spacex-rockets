import { NextFunction, Request, Response } from "express";

export const apiLogger = ({url, body}: Request, res: Response, next: NextFunction) => {
    console.log(`Request: ${url} ${JSON.stringify(body)}`);
    next();
  };