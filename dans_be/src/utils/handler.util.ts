import express from "express";
import { Message } from "../interface/response.interface";
import { Handler } from "../interface/handler.interface";

export default function handler(fn: Handler): express.Handler {
	return async (req, res, next) => {
		try {
			const data = await fn(req, res, next);
			if (!data) next();
			
			res.status(data.code).json({
				data: data,
				message: Message.Success
			})
		} catch (error) {
			next(error);
		}
	}
}