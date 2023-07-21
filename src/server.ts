// src/server.ts
import http from 'http';
import app from './app';
import { Server } from 'socket.io';

const PORT = 3000;
const server = http.createServer(app);
const io = new Server(server);

io.on('connection', (socket) => {
    console.log('Nuevo cliente conectado');
    // Aquí puedes implementar tus eventos de Socket.IO
});

server.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});
