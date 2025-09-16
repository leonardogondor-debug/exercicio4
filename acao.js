const tabela = [
    ["alimentacao", 0],
    ["lazer", 0],
    ["trabalho", 0],
    ["transporte", 0],
    ["total", 0],
]

const obterelemento = (id) => document.getElementById(id);
const obtervalor = () => obterelemento(valor).value;
const obtercategoriainformada = () => obterelemento("categoria").Value;
const obtercategoria = (tabela, nomeCategoria) => tabela.find((item) => item[0] === nomeCategoria);
const valornegativo = (valor) => valor < 0;
const valortotal = (total,valor) => total + valor;

const atualizartabela = (categoris, valor) => Categoria[1] = somavalor(categoria[1], valor);
const atualizarsistema = () => {
    
}

