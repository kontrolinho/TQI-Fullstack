// for é um loop dentro de elementos iteráveis [arrays, strings].

function multiplicaPorDois(arr) {
    let multiplicados = [];

    for (let i = 0; i < arr.length; i++) {
        multiplicados.push(arr[i] * 2);
    }

    return multiplicados;
}

const numeros = [2, 33, 9393, 9292, 1818181];
console.log(multiplicaPorDois(numeros));


// for...in
// loop entre propriedades enumeraveis de um objeto
// (obj[prop]) vai acessar as propriedades dentro dos obj

function forIn(obj) {
    for(prop in obj) {
        console.log(obj[prop]);
    }
}

const meuObj = {
    nome: "Gatito",
    idade: "10",
    raca: "Siberiano"
}

forIn(meuObj);


// for...of
// loop entre estruturas iteráveis (arrays, strings)

function logLetras(palavra) {
    for(letra of palavra) {
        console.log(letra);
    }
}
const palavra = 'Abacaxi';
logLetras(palavra);

///////////////////////////////////////////////////

function logNumeros (nums) {
    for (n1 of nums) {
        console.log(n1);
    }
}
const nums = [30, 89, 33, 2992, 0];
logNumeros(nums);