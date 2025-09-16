const tabela = [
    ["alimentacao", 0],
    ["lazer", 0],
    ["trabalho", 0],
    ["transporte", 0],
    ["total", 0],
]

const obterelemento = (id) => document.getElementById(id);
const obtervalor = () => document.getElementById(valor);
const valornegativo = (valor) => valor < 0;
const valortotal = (total,valor) => total + valor;


