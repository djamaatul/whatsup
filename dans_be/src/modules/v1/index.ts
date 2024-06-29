import { Router } from "express";
import userModule from "./user/user.controller";
import authModule from "./auth/auth.controller";
import authorization from "../../middlewares/authorization.middleware";

export const v1 = Router()

v1.use('/auth', authModule)
v1.use('/users', authorization, userModule)