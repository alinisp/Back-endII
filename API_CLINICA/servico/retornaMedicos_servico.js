const conexao = require('./conexao.js');

const retornaMedicos = () => {
    return conexao.promise().query('SELECT * FROM medicos ORDER BY nome');
};

const retornaMedicosNome = (nome) => {
    return conexao.promise().query('SELECT * FROM medicos WHERE nome LIKE ? ORDER BY nome', [`%${nome}%`]);
};

const retornaMedicosEspecialidade = (especialidade) => {
    return conexao.promise().query(
        'SELECT m.id, m.nome, m.telefone, m.email, e.especialidade ' +
        'FROM medicos m ' +
        'JOIN especialidades e ON m.especialidade = e.id ' +
        'WHERE e.especialidade LIKE ? ORDER BY m.nome',
        [`%${especialidade}%`]
    );
};


const retornaMedicosId = (id) => {
    return conexao.promise().query('SELECT * FROM medicos WHERE id = ?', [id]);

};

module.exports = {
    retornaMedicos,
    retornaMedicosNome,
    retornaMedicosEspecialidade,
    retornaMedicosId
};