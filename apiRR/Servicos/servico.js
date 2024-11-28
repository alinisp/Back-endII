import colecaoRR from "../DadosRR/dadosrr.js";

export const buscarCd = () => {
    return colecaoRR;
}

export const buscarCddsPorNome = (cidadeRR) => {
    return colecaoRR.filter(estado => estado.nome.toLowerCase().includes(cidadeRR.toLowerCase()));
};

export const buscarCdPorId = (id) => {
    const idRR = parseInt(id);
    return colecaoRR.find(estado => estado.id === idRR);
}