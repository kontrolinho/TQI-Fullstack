// estrutura do tipo chave e valor

let pessoa = {
    nome: 'Marcos',
    idade: '17',
    sexo: 'Masculino'
}

console.log(pessoa);
console.log(typeof(pessoa));

// utilizando a biblioteca do JS


console.log(Object.values(pessoa)); // valores do objeto
console.log(pessoa.nome); // vai retornar apenas o nome da pessoa
console.log(pessoa["idade"]) // vai retornar a idade da pessoa

