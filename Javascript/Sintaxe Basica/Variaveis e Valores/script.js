// Sintaxe Basica - Tipos Primitivos

// ---------- Regras de Uso de Variaveis ---------- //


// Iniciar com letras, underscore ( _ ) ou cifrão ( $ ) 

// Não usar espaços ( Utilizar camelCase ou _ )

// Não usar palavras reservadas ( var function [function é reservado para o JS] )

// Declarar variaveis no topo do bloco de codigo ( colocar variaveis no topo de tudo )
// --------------------------------------------------//



// -------------------- VAR ---------------------- //

// typeof serve para saber o tipo de variavel

var vOuF = false;
console.log(typeof(vOuF));              // Boolean

var numeroQualquer = 1;
console.log(typeof(numeroQualquer));    // Number

var nome = 'Nome aleatorio' 
console.log(typeof(nome));              // String

var semValor
console.log(semValor);                  // undefined

// ------------------------------------------------ //


//  let pode ter o valor alterado
let variavel2 = 'Variavel 1'
variavel2 = 'Variavel 9'
console.log(variavel2)

// const é um valor constante, não pode ser alterado
const constante = 'Constante 1'
// constante = 'Constante 2' // Constante nao pode ser alterada, logo terá um erro.
console.log(constante);


// ------------------- Escopo --------------------- //

// Escopo global e local
// Escopo global a variavel é declarada fora de qualquer bloco, disponivel em todo o codigo
// Escopo Local a variavel é declarada dentro de um bloco, sua visibilidade pode ser disponivel ou não.

var escopoGlobal = 'global';
console.log(escopoGlobal); // Escopo Global está sendo visto por todo o codigo, logo não retornará nenhum erro do console.log

function escopoLocal() {

    let escopoLocalInterno = 'local' // EscopoLocal não é visto pelo codigo todo, e caso o console.log esteja fora do escopo, retornará erro.
    console.log(local); // Este console.log está dentro do escopoLocal, logo está lendo este escopo, e retornará a string 'Local' 
}


// ------------------------------------------------ //

// ------------------- Atribuição ----------------- //

//   = significa ATRIBUIÇÃO 
var nomeGato = 'Gatito';  // variavel nomeGato recebe o valor Gatito
console.log(nomeGato);

//   == significa COMPARAÇÃO
var comparacao = '2' == '2' // variavel '0' tem o valor igual a 0? Neste caso retorna true.
console.log(comparacao);

//   === significa COMPARAÇÃO IDENTICA
var comparacaoIdentica = '5' === 5; // retornará false, pois em comparação identica, tanto o VALOR, quanto o TIPO deve ser verdadeiro. Neste caso são valores Iguais ( '0' == 0 ), porém são de tipos diferentes, '0' é uma string, 5 é um number.
console.log(comparacaoIdentica);

// ------------------------------------------------ //


// ------------ Operadores Aritméticos ------------- //

// Adição
var adicao = 5 + 3;
console.log(adicao); 

// Subtração
var subtracao = 5 - 2;
console.log(subtracao); 

// Divisão Real
var divisaoReal = 7 / 5;
console.log(divisaoReal); 

// Multiplicação
var multiplicacao = 5 * 5;
console.log(multiplicacao); 

// Potencia
var potencia = 5 ** 3;
console.log(potencia); 

// Divisão Inteira
var divisaoInteira = 5 % 3;
console.log(divisaoInteira); // retorna o resto da divisao

// ------------------------------------------------ //

// ----------- Operadores relacionais ------------- //

// > Maior que
var maiorQue = 5 > 3;
console.log(maiorQue);

// < Menor que
var menorQue = 5 < 8;
console.log(menorQue);

// >= Maior ou igual que
var maiorOuIgual = 5 >= 3;
console.log(maiorOuIgual);

// <= Menor ou igual que
var menorOuIgual = 5 <= 3;
console.log(menorOuIgual);

// ------------------------------------------------ //

// ----------- Operadores Lógicos ----------------- //

// && - "e" - considera que todos os valores sejam true
var e = true && true;
console.log(e)

// || - "ou" - considera que qualquer valor seja true
var ou = true || false;
console.log(ou)

// ! - "não" - inverte o valor de true para false, ou vice-versa
var nao = !true;
console.log(nao)


// ------------------------------------------------ //