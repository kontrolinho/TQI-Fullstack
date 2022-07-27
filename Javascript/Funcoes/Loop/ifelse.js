// if else

function numeroPositivo (n1) {
    const negativo = n1 < 0;
    const maiorDez = n1 > 10;

    if (negativo) {
        return 'Este número é negativo!';
    } else if (!negativo && maiorDez) {
        return 'Este número é positivo e maior que 10!'
    }
        return 'Este número é positivo!';
}

console.log(numeroPositivo(30));
console.log(numeroPositivo(-10));
console.log(numeroPositivo(7));