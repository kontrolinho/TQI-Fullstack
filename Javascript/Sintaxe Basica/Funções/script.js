// ------------ Funções ---------------------- //
// Funções são blocos de comandos e instruções para a execução de determinadas tarefas

function funcao() {
    console.log('Essa mensagem veio de uma função');
}
funcao();

// () significa que é um objeto do tipo função
// {} significa que é um bloco de instrução

// ------------------------------------------- //

// ----------- Função com parametros --------- //

function nomeComParametro (primeiroParametro, segundoParametro) {
    console.log(primeiroParametro, segundoParametro)
}
nomeComParametro('Aqui está o primeiro parametro', 'E aqui, o segundo parametro!');

// ----------- Funçoes declarativas --------- //
// funcoes declarativas obrigatoriamente tem que ter um nome
// Elas possuem o uso mais comum, devem ser declaradas utilizando a palavra function, seguido do nome da funcao, a condicao () e a instrucao {}

// funcoes declarativas

function funcaoDeclarativa() {
    console.log('Esta é uma função declarativa')
}
funcaoDeclarativa();

// expressoes de funcoes
// com nomeacao
var funcaoVariavel = function comNomeacao() {
    console.log('Esta é uma função com nomeação')
}
funcaoVariavel();

// sem nomeacao
// funcao sem nomeacao o JS ja atribui o nome da funcao ao nome da variavel
var funcaoSemNomeacao = function () {
    console.log('Esta é uma função sem nomeação')
}
funcaoSemNomeacao();


// ----------- Arrow Function --------- //

var funcaoArrow = () => {
    console.log('Sou uma arrow function!')
}
