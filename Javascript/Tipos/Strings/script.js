// strings sao textos/frases, sao declarados entre aspas ou crases
// crases sao utilizadas em interpolacao
// ex:

let firstName = 'Hilton'
let lastName = 'Gonçalves'
let fullName = `${firstName} ${lastName}`

console.log(fullName)


// string é um tipo de dado iteravel
// indice sempre comeca do 0, tamanho sempre começa do 1
console.log(firstName[0]); // H
console.log(firstName[1]); // i
console.log(firstName.length); // Vai retornar 6, TAMANHO do indice

// concatenacao de strings
console.log(firstName + " " + lastName); // coloquei um espaco no meio
// atualizacao recente do JS
console.log(`${firstName} ${lastName}`);

// nome na primeira linha e sobrenome na segunda linha
console.log(firstName + "\n" + lastName); // \n pula 
// atualizacao recente do JS - pode pular linha normalmente
console.log(`${firstName}
${lastName}`);

// utilizando aspas na string
console.log(' \' \' \" \" ');

// separar argumentos na string, retorna uma lista, nao modifica a frase
let frase = 'Olá, tudo bem?';
frase.split(""); // separa letra por letra
frase.split(" "); // com espaco separa palavra por palavra

// saber se o let frase vai retornar a palavra selecionada, resposta booleana [true or false]
frase.includes("tudo");

// saber se let frase inicia com a letra o.
frase.startsWith("o");

// se termina com ? (interrogacao)
frase.endsWith("?");

// tamanho da frase
console.log(frase.length);

// replace, mudar a virgula por exclamacao
frase.replace(",", "!"); // apenas retornara a string frase modificada

let fraseModificada = frase.replace(",", "!") // atribui na memoria de fraseModificada o valor de replace da frase
console.log(fraseModificada);