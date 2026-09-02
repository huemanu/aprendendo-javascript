

let coeficientes = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
let independentes = [10, 11, 12];


function Sistema(coeficientes, independentes) {
    this.coeficientes = coeficientes;
    this.independentes = independentes
}


function copiarLinha (sistema, destino, origem) {
    let novoSistema = new Sistema(sistema.coeficientes, sistema.independentes);
    novoSistema.coeficientes[destino] = sistema.coeficientes[origem];
    novoSistema.independentes[destino] = sistema.independentes[origem];
    return novo_sistema;
}


function trocarLinhas (sistema, linhaA, linhaB) {
    let novoSistema = new Sistema(sistema.coeficientes, sistema.independentes);
    novoSistema.coeficientes[linhaA] = sistema.coeficientes[linhaB];
    novoSistema.independentes[linhaA] = sistema.independentes[linhaB];
    novoSistema.coeficientes[linhaB] = sistema.coeficientes[linhaA];
    novoSistema.independentes[linhaB] = sistema.independentes[linhaA];
    return novo_sistema;
}


function linhaEscalar (sistema, linha, escalar) {
    let novoSistema = new Sistema(sistema.coeficientes, sistema.independentes);
    for (let i = 0; i < novoSistema.coeficientes.length; i++) {
        novoSistema.coeficientes[linha][i] = sistema.coeficientes[linha][i] * escalar;
    }
    novoSistema.independentes[linha] = sistema.independentes[linha] * escalar;
}


function linhaRecebeElaMaisLinha (sistema, linhaDestino, linhaOrigem, escalar) {
    let novoSistema = new Sistema(sistema.coeficientes, sistema.independentes);
    for (let i = 0; i < novoSistema.coeficientes.length; i++) {
        novoSistema.coeficientes[linhaDestino][i] = sistema.coeficientes[linhaDestino][i] + escalar * sistema.coeficientes[linhaOrigem][i];
    }
        novoSistema.independentes[linhaDestino] = sistema.independentes[linhaDestino] + escalar * sistema.independentes[linhaDestino];
}
