import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

import { Code, Message } from "../../../interface/response.interface";
import UserRepository from "../../../repositories/user.repository";
import { ThrowResponse } from "../../../utils/error.util";
import * as dto from "./auth.dto";
import { Router } from 'express';
import handler from '../../../utils/handler.util';
import validation from '../../../middlewares/validation.middleware';
import authorization from '../../../middlewares/authorization.middleware';

const authModule = Router();

authModule.post('/register', validation({ body: dto.register }), handler(async (req) => {
	const body: dto.Register = req.body;

	const exist = await UserRepository.getUser({
		email: body.email
	})

	if (exist) throw new ThrowResponse(Message.Exist)
	const salt = await bcrypt.genSalt(10);
	const hashedPassword = await bcrypt.hash(body.password, salt);

	const user = await UserRepository.saveUser({
		email: body.email,
		name: body.name,
		password: hashedPassword
	})

	return {
		data: user
	}
}))

authModule.post('/login', validation({ body: dto.login }), handler(async (req, res) => {
	const body: dto.Login = req.body;

	const exist = await UserRepository.getUser({
		email: body.email
	})

	if (!exist) throw new ThrowResponse(Message.NotFound);

	const match = await bcrypt.compare(body.password, exist.password);

	if (!match) throw new ThrowResponse(Message.WrongPassword);

	const { password, ...withoutPassword } = exist;

	const token = jwt.sign(withoutPassword, process.env.SECRET_KEY || '');

	req.session = {
		token
	};

	return {
		data: withoutPassword
	}
}));

authModule.get('/', authorization)

export default authModule;