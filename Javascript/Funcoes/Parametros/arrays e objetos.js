// Arrays

///////// SPREAD ////////////
// Spread: é uma tecnica de se ligar separadamente com elementos
// o que era parte de uma array se torna um elemento independente


function soma(x, y, z) {
    return x + y + z;
}

const numeros = [1, 2, 7];      // atribuindo valores ao x, y, z
console.log(soma(...numeros));
// ... vai pegar todos os valores dentro da const array numeros


///////////////////////////

/////// REST /////////////
// Rest: combina os argumentos em um array
// O q era um elemento independente se torna parte de uma array

function tamanho(...args) {
    console.log(args.length)
    // vai inputar no console o tamanho dos args (length).
    // vai resultar em uma array dos elementos
}

tamanho() // 0
tamanho(5, 9) // 2
tamanho(98, 999, 93939, 28288282, 3, 5, 12) // 7
