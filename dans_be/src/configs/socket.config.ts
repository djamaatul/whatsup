import { Server } from 'socket.io';
import server from '../main';

const socket = new Server(server);

export default socket;