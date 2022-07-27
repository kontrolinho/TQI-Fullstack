// var e let tem escopos diferentes
// Quando codar sempre utilizar let, por conta de segurança

var a = 1;
var b = 2;

if (a === 1) {
    var a = 11; // var aqui o escopo é global
    let b = 22; // let aqui o escopo é dentro do bloco if

    console.log(a); // a = 11
    console.log(b); // b = 22
}

console.log(a); // 11
console.log(b); // 2



///// Hoisting
// let é necessario declarar antes o valor
// com var o JS joga o var pra cima, mesmo com o var abaixo da funcao..

numberOne = 1;
console.log('O hoisting é', numberOne + 2);

var numberOne;

////////////////////

var firstName = 'João';
var lastName = 'Souza';

if (firstName === 'João') {
    var firstName = 'Pedro'
    let lastName = 'Silva';
    lastName = 'Oliveira'; // reatribui lastName para Oliveira
    console.log(lastName)
}

console.log(firstName, lastName); // Escopo Global, logo da Pedro Souza
