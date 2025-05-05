import express from 'express';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(express.json());

let ultimaMensagem = 'Nenhuma mensagem recebida ainda';

app.post('/api/dados', (req, res) => {
    console.log('Dados recebidos do Unity:', req.body);
    res.json({ status: 'Recebido com sucesso' });
});

app.post('/api/cadastrar', (req, res) => {
    ultimaMensagem = req.body.msg; // salva a msg
    console.log('Recebido do React:', ultimaMensagem);
    res.json({ status: 'Mensagem salva' });
});

app.get('/api/cadastrar', (req, res) => {
    res.json({ mensagem: "Olá unity está é a ultima msg do react", ultimaMensagem }); // Unity busca isso
});


app.listen(3001, () => {
    console.log('Servidor rodando na porta 3001');
});
