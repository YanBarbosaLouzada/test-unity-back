import express from 'express';
import cors from 'cors';
import testRouter from "./routes/testRouter.js";
import { WebSocketServer } from 'ws';
import { createServer } from "http";
// Certificados para SSL (caso precise)
const server = createServer();

const wss = new WebSocketServer({ server });

let position = { x: 0, y: 0 };

wss.on('connection', (ws) => {
    console.log('Cliente conectado');

    // Envia a posição inicial
    ws.send(JSON.stringify(position));

    ws.on('message', (message) => {
        const data = JSON.parse(message);
        if (data.action === 'move') {
            switch (data.direction) {
                case 'up':
                    position.y += 1;
                    break;
                case 'down':
                    position.y -= 1;
                    break;
                case 'left':
                    position.x -= 1;
                    break;
                case 'right':
                    position.x += 1;
                    break;
            }

            // Envia nova posição para todos os clientes
            wss.clients.forEach((client) => {
                if (client.readyState === ws.OPEN) {
                    client.send(JSON.stringify(position));
                }
            });
        }
    });

    ws.on('close', () => {
        console.log('Cliente desconectado');
    });
});

// Inicia o servidor HTTPS
server.listen(8080, () => {
    console.log('Servidor WebSocket rodando na porta 8080');
});




const app = express();

app.use(cors());
app.use(express.json());

app.use('/api', testRouter);

app.listen(3001, () => {
    console.log('Servidor rodando na porta 3001');
});
