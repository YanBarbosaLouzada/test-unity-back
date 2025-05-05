import express from 'express';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(express.json());

app.post('/api/dados', (req, res) => {
    console.log('Dados recebidos do Unity:', req.body);
    res.json({ status: 'Recebido com sucesso' });
});

//quero cadastrar um novo usuario
app.post('/api/cadastrar', (req, res) => {
    const msgReact = req.body.msg;
    console.log('Recebido do React:', msgReact);
    res.json({ resposta: 'Oi Unity, recebi isso: ' + msgReact });
});

app.listen(3001, () => {
    console.log('Servidor rodando na porta 3001');
});
