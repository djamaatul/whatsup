import { ErrorRequestHandler } from "express"

const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
	res.status(err.code).json({
		message: err.message
	})
}

export default errorHandler