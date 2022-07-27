// O que são vetores ou arrays

// Como declarar uma array
// Array pode guardar varios tipos de dados, incluindo arrays dentro de arrays.
let array = ['Banana', 3, true, ['array1'], 'Aveia', ['array2'], ['array3']];
console.log(array[0]); // [0] na declaração do array, está imprimindo no console o primeiro valor no array, no caso Banana.


// ---------------- Manipulando arrays ------------------ //

//      forEach()   - Executa uma função para cada indice selecionado de uma array
//      unshift()   - Adiciona um item no inicio do array
//      shift()     - Remove um item do inicio do array
//      push()      - Adiciona um item no final do array
//      pop()       - Remove um item do final do array
//      indexOf()   - Retorna o índice de um valor
//      splice()    - Remove ou substitui um item pelo índice
//      slice()     - Retorna uma parte de um array existente


// ------------------------------------------------------ //

// forEach
array.forEach(function(item, index){console.log(item, index)});
// executará uma repetição para cada item ou indice dentro de uma array
// Neste caso está listando cada item dentro da array
// Banana = 0, 3 = 1, true = 2...

// push
array.push('Abacate');
console.log(array); // Adiciona um item no final do array, pode ser um numero, string, e até uma nova array

// pop
array.pop();
console.log(array); // Remove um item no final da array, neste caso o push Abacate.

// shift
array.shift();
console.log(array); // Remove um item no inicio da array, neste caso a string Banana.

// unshift
array.unshift('Gatito')
console.log(array); // Adiciona um novo item no inicio da array, neste caso a string Gatito.

// indexOf
console.log(array.indexOf('Gatito')); // Retorna o indice do valor indicado, Gatito esta no indice 0.

// splice
array.splice(0, 1);
console.log(array); // Remove ou substitui um item pelo indice, vai remover o item do indice 0 ao 2.

// slice
let novoArray = array.slice(0, 4);
console.log(novoArray); // Retorna uma parte de uma array já existente


// ------------------------------------------------ //


// ------------------- Objetos -------------------- //

// Objetos podem guardar strings, numbers, booleans, arrays (que podem guardar arrays dentro) e objetos internos (Assim como arrays podem guardar objetos internos).
let object = { string: 'string', number: '1', boolean: true, array:[array],
objectIntern: {objectIntern: 'objectIntern'}};
console.log(object); // Vai mostrar todos os valores dentro de object
console.log(object.boolean) // Vai acessar o valor booleano

// Desestruturação

var stringDes = object.string;
console.log(stringDes); // Retorna o valor da primeira string

var arrayDes = object.array;
console.log(arrayDes); // Retorna o valor da primeira array

var { string, boolean, number } = object;
console.log(string, boolean, number); // Retorna os valores selecionados do object no caso String, True e 1.

// Desestruturação utilizando chaves
const gatito = {
    raca: 'Siberiano',
    tamanho: 'M',
    funcao: 'Comer Whiskas',
}
const {raca, tamanho, funcao} = gatito

console.log(gatito);