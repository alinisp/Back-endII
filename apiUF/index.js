const express = require('express');
const colecaoUF = require('./Dados/dados');

const app = express();

app.get('/ufs', (req, res) => {
    res.jsom(colecaoUF)
});

app.listen(8080, () =>{
    console.log('Servidor iniciado na porta 8080');
});