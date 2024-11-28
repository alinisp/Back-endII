import express from 'express';
import { buscarCd, buscarCdPorId, buscarCddsPorNome } from './Servicos/servico.js'

const app = express();

app.get('/cds', (req, res) => {
    const cidadeRR = req.query.busca;
    const resultado = cidadeRR ? buscarCddsPorNome(cidadeRR) : buscarCd();
    if (resultado.length > 0) {
        res.json(resultado);
    } else {
        res.status(404).send({ "erro": "Nenhuma cidade encontrada" });
    }
});

app.get('/cds/:idRR', (req, res) => {
    const rr = buscarCdPorId(req.params.idRR);

    if (rr) {
        res.json(rr);
    } else if (isNaN(parseInt(req.params.idRR))) {
        res.status(400).send({ "erro": "Requisição inválida" });
    } else {
        res.status(404).send({ "erro": "cidade não encontrada"});
    }
});

app.listen(8080, () => {
    console.log('Servidor iniciado na porta 8080');
});