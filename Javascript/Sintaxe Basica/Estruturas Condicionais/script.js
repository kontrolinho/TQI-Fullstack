//////////////////////////////////////////////////////////////
//      () É CONDIÇÃO     ////////     {} É INSTRUÇÃO       //
/////////////////////////////////////////////////////////////


// if, else e else if

var jogador1 = 0;
var jogador2 = 0;
var placar;

// -------------------------------------------------- //

// if ternário
jogador1 != -1 && jogador2 != -1 ? console.log('Os jogadores são validos') : console.log('Jogadores Invalidos!')

//if
// Se x (operador de comparacao >, <, >=, <= ...) algum valor, (operador lógico   [ &&, ||, !]) e y (operador de comparacao), retornará z resultado
// exemplo abaixo - Jogador1 maior que 0 E jogador2 igual a 0, imprime a mensagem jogador 1 marcou ponto.
// -- Se tal coisa, insira resultado, SENÃO, insira resultado...
if (jogador1 > 0 && jogador2 == 0) {
    console.log('Jogador 1 marcou ponto!');
    placar = jogador1 > jogador2;
} else if (jogador2 > 0 && jogador1 == 0) {
    console.log('Jogador 2 marcou ponto!');
    placar = jogador2 > jogador1;
} else {
    console.log('Ninguém marcou ponto!');
}

// -------------------------------------------------- //

// Ninho de if
if (jogador1 = -1) {
    if (jogador1 > 0){
        console.log('Jogador 1 marcou ponto!');
    } else if (jogador2 > 0){
        console.log('Jogador 2 marcou ponto!');
    } else {
        console.log('Ninguem marcou ponto!');
    }
} else {
    console.log('Jogador Invalido');
}



// -------------------------------------------------- //

// -------------- Switch ---------------------------- //

// Estrutura condicional de casos, caso aconteça X, retornar Y
// Sempre parando o switch com break , caso contrário irá entrar em loop

switch(placar) {
    case placar = jogador1 > jogador2:
    console.log('Jogador 1 Ganhou');
    break;
        case placar = jogador2 > jogador1:
        console.log('Jogador 2 Ganhou');
        break;
        default:
        console.log('Ninguem ganhou')
        break;
}


// -------------------- For ---------------------- //
// for([expressaoInicial];[condicao];[incremento]){declaracao}



// For é uma repetição de instrução até que a condição seja falsa
// sendo array, pode receber qualquer valor, neste caso 5 strings
// array com valor1, valor2, valor3, valor4 e valor5
// i = 0, i sendo menor que o tamanho da array (5 valores)
// então, i++ significa que i recebera +1 a cada repetição que ele tiver
// console.log(i) retornará 0, 1, 2, 3 e 4. (5 valores)
// neste caso quando i chegará ao 5o valor, ou 5a repetição, porém quando for a 6, é false, então é pausado
// for pausa apenas quando for false, 5 == 6 é false
// 0 a primeira repetição, 1 a segunda...

var array = ['valor1','valor2','valor3','valor4', 'valor5']
var object = { propriedade1: 'valor1', propriedade2: 'valor2', propriedade3:'valor3' }
for (let i = 0; i < array.length; i++) {
    console.log(i);
}

// ----------------------- For/In --------------------- //
// É uma repetição a partir de uma propriedade
// vai imprimir a propriedade de cada object (propriedade 1, 2 e 3)
// utilizando com array
for (let i in array) {
    console.log(i);
}

// utilizando com object
// (i [já que o JS ja entende que é uma variavel de estado] in object [vai criar uma variavel i entro de object] e vai percorrer cada propriedade do objeto e imprimir essas propriedades.
for (i in object) {
    console.log(i);
}


// ----------------------- For/of --------------------- //
// executa a repetição a partir do valor do array
// neste caso vai imprimir o valor da array (valor 1, 2, 3 e 4 )
for (i of array) {
    console.log(i);
}

// for/of nao funciona com objetos pois as propriedades variam
// diferente do array que sao apenas numeros inteiros
// porem utilizando com objetos, cara caractere dentro do valor sera
// impresso em linhas separadas

for (i of object.propriedade1) {
    console.log(i); // neste caso, em propriedade 1, imprimiu valor1, porém cada caractere em uma linha
}

// ----------------------- While --------------------- //
// executa uma instrucao "enquanto" (while) uma determinada condicao seja true
// no caso, a = 0, enquanto a for menor que 3, acrescenta 1 (a++) e imprime no console
var a = 0;
while (a < 3) {
    a++;
    console.log(a);
}


// -------------------- Do/While --------------------- //
// neste caso b = 0, fazer incremento de b (b++), imprima no console, enquanto b for menor que 10
var b = 0;
do {
    b++;
    console.log(b);
} while (b < 5);