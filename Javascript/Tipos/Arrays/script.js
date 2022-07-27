// arrays sao vetores
// é uma lista iteravel de elementos
// array é um objeto
let array = []; // array vazio

array.push(3); // adiciona um item ao FINAL do array
array.push(2); // array = 3, 2
console.log(array);

// removendo um item da array
array.pop(); // remove o ULTIMO elemento da array
console.log(array);

array.push(2);
array.shift(); // remove o primeiro elemento da array
console.log(array); // apenas o elemento 2 na array

array.unshift(5); // adiciona um elemento ao INICIO da array
console.log(array); // 5, 2

// se inclui X elemento na array / array.includes
console.log(array.includes(8)); // retorno boolean - false

// se todos os meus itens sao iguais a 5 / array.every
console.log(array.every(item => item === 5)); // false

// se algum dos meus itens é igual a 5 / array.some
console.log(array.some(item => item === 5)); // true

// reverter todos os items (5 pro final, 2 pro inicio)
// array.reverse