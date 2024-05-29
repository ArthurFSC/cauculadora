function adicionarAoDisplay(valor) {
    document.getElementById('display').value += valor;
}

function limparDisplay() {
    document.getElementById('display').value = '';
}

function calcular() {
    var expressao = document.getElementById('display').value;
    var resultado = eval(expressao);
    document.getElementById('display').value = resultado;
}
