function compararNumeros (n1, n2) {
    if (!n1 || !n2) return 'Defina 2 números'
    const primeiraFrase = criaPrimeiraFrase (n1, n2);
    const segundaFrase = criaSegundaFrase (n1, n2);

    return `${primeiraFrase} ${segundaFrase}`
}

function criaPrimeiraFrase (n1, n2) {
    let saoIguais = 'são iguais';

    if (n1 !== n2) {
        saoIguais = 'não são iguais';
    }

    return `Os números ${n1} e ${n2} ${saoIguais}.`
}

function criaSegundaFrase (n1, n2) {
    const soma = n1 + n2;

    if (soma < 9) {
        return `Sua soma é ${soma} que é menor que 10.`
    } else if (soma == 10) {
        return `Sua soma é ${soma} que é igual a 10.`
    } else if (soma > 11 && soma < 19) {
        return `Sua soma é ${soma} que maior que 10 e menor que 20`
    } else if (soma == 20) {
        return `Sua soma é ${soma} que é igual a 20.`
    } else if (soma > 21) {
        return `Sua soma é ${soma} que é maior que 20.`
    }
    
}

console.log(compararNumeros(1,2))