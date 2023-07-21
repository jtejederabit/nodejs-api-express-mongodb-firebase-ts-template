// src/server.ts
import http from 'http';
import app from './app';
import { Server } from 'socket.io';

const PORT = 3000;
const server = http.createServer(app);
const io = new Server(server);

io.on('connection', (socket) => {
    console.log('New client connected');
    // Implement your socket.io events here
});

server.listen(PORT, () => {
    console.log(`Server listening at port ${PORT}`);
});
