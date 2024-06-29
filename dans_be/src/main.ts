import "dotenv/config"
import "./configs/database.config";
import Session from 'cookie-session';
import express from 'express';
import http from 'http';
import cors from 'cors'

import { router } from "./modules";
import errorHandler from "./middlewares/error.middleware";
import { Code, Message } from "./interface/response.interface";

const app = express();
const server = http.createServer(app);

const port = process.env.PORT;

app.use(express.json());
app.use(cors({
	origin: '*',
	credentials: true
}));
app.use(Session({
	name: '_',
	keys: [`${process.env.SECRET_KEY}`],
}))
app.use('/api', router);
app.use((req, res)=> {
	res.status(Code.NotFound).json({
		message: Message.RouteNotFound
	})
})
app.use(errorHandler);

server.listen(port, () => {
	console.log(`server running on port ${port}`)
})

export default server;