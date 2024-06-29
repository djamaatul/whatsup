import { NextFunction, Request, Response } from "express";
import { User } from "../entities/user.entity";

export type Handler = (req: Request & { user?: Exclude<User, 'password'> }, res: Response, next: NextFunction) => Promise<any>