function calculaIdade (anos) {
    return `Daqui a ${anos} anos, ${this.nome} terá ${this.idade + anos} anos de idade.`
}

const gato = {
    nome: 'Gatito',
    idade: 10,
    raca: 'Siberiano',
}

const pessoa1 = {
    nome: 'Joana',
    idade: 27,
}

const pessoa2 = {
    nome: 'Marcos',
    idade: 30,
}

console.log (calculaIdade.call(gato, 7));
console.log (calculaIdade.apply(pessoa1, [3]));