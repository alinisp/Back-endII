const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'apclinica',
    password: 'clinica123',
    database: 'clinica'
});

connection.connect((err) => {
    if (err) {
        console.error('Erro ao conectar ao Banco de dados:', err);
        return;
    }
    console.log('Sucesso ao acessar o Banco de Dados!');
});

module.exports = connection;