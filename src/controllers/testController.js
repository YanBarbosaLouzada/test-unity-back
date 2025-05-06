//node controller
import axios from 'axios';

export default class TestController {
    // Método para receber dados do Unity
    static async postTest(req, res) {
        try {
            console.log("Dados recebidos do Unity", req.body);
            res.status(200).json({ status: 'Recebido com sucesso'});
        }
        catch (error) {
            console.error('Erro ao fazer a requisição:', error);
            res.status(500).json({ error: 'Erro ao fazer a requisição' });
        }
    }
}
