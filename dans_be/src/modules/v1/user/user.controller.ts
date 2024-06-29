import { Router } from "express";
import { Code, Message } from "../../../interface/response.interface";
import validation from "../../../middlewares/validation.middleware";
import UserRepository from "../../../repositories/user.repository";
import * as dto from './user.dto';
import handler from "../../../utils/handler.util";

const userModule = Router();

userModule.get('/:user_id', validation({ params: dto.getUser }), handler(async (req, res) => {
	const user_id = +req.params.user_id || -1;

	const data = await UserRepository.getUser({
		user_id
	})

	return {
		data
	}
}))

userModule.get('/', validation({ params: dto.getUsers }), handler(async (req, res) => {

	const data = await UserRepository.getUsers(req.body);

	return {
		data
	}
}))

export default userModule;