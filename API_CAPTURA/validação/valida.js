export const validaUsuario = (usuario) => {
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const regexTelefone = /^\(\d{2}\) \d{5}-\d{4}$/;

    if (usuario.nome.length < 2) {
        return { valido: false, mensagem: "Nome deve ter pelo menos dois caracteres." };
    }

    if (!regexEmail.test(usuario.email)) {
        return { valido: false, mensagem: "E-mail inválido." };
    }

    if (!regexTelefone.test(usuario.telefone)) {
        return { valido: false, mensagem: "Telefone inválido. Use o formato (XX) XXXXX-XXXX." };
    }

    return { valido: true };
};

// function validaNome(nome){
//     const regexNome = /^[a-zA-ZÀ-ÿ\s\-`]+$/;
//     const isvalid = nome.length >= 2 && regexNome.test(nome);
//     return isvalid;
// }


// function validaEmail(email){
//     const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+/;
//     const isvalid = regexEmail.test(email);
//     return isvalid;
// }

// export function ValidaUsuario(nome, email) {
//     const nomeValido = validaNome(nome);
//     const emailValido = validaEmail(email);

//     const usuarioValido = nomeValido && emailValido;

//     if (usuarioValido) {
//         return {status: true, mensagem:''};
//     } else {
//         return {status: false, mensagem:'Nome e/ou Email inválido(s).'};
//     }

// }