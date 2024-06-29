import jwt from "jsonwebtoken";
import { Code, Message } from "../interface/response.interface"
import handler from "../utils/handler.util"
import safe from "../utils/safe.util";
import { ThrowResponse } from "../utils/error.util";

const authorization = handler(async (req) => {
	const session = req.session;

	const [error] = await safe(() => jwt.verify(session?.token, `${process.env.SECRET_KEY}`));

	if (error) throw new ThrowResponse(Message.NoSession, Code.Unauthorized)

	return
})

export default authorization