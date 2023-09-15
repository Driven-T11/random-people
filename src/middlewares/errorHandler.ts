import { NextFunction, Request, Response } from "express";

export function errorHandler(error: Error, req: Request, res: Response, next: NextFunction) {
    console.log(error)
    return res.status(500).send("Internal server error")
}