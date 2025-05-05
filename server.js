import express from 'express';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(express.json());

app.post('/api/dados', (req, res) => {
    console.log('Dados recebidos do Unity:', req.body);
    res.json({ status: 'Recebido com sucesso' });
});

app.listen(3001, () => {
    console.log('Servidor rodando na porta 3001');
});
