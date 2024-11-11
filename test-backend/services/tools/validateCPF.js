function validateCPF(cpf) {
    console.log(cpf)
    cpf = cpf.replace(/[^\d]+/g, ''); // Remove tudo que não for número

    if (cpf.length !== 11 || /^(\d)\1+$/.test(cpf)) {
        return false; // Verifica se o CPF tem 11 dígitos e não é uma sequência repetida
    }

    // Verificação do primeiro dígito verificador
    let soma = 0;
    for (let i = 0; i < 9; i++) {
        soma += parseInt(cpf.charAt(i)) * (10 - i);
    }
    let resto = 11 - (soma % 11);
    let primeiroDigitoVerificador = resto > 9 ? 0 : resto;

    if (primeiroDigitoVerificador !== parseInt(cpf.charAt(9))) {
        return false;
    }

    // Verificação do segundo dígito verificador
    soma = 0;
    for (let i = 0; i < 10; i++) {
        soma += parseInt(cpf.charAt(i)) * (11 - i);
    }
    resto = 11 - (soma % 11);
    let segundoDigitoVerificador = resto > 9 ? 0 : resto;

    return segundoDigitoVerificador === parseInt(cpf.charAt(10));
}


module.exports = { validateCPF };