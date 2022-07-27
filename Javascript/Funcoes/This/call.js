// Call
// Chamando, no exemplo está puxando a info nome, porém especificando que é de pessoa.
const pessoa = {
    nome: 'Miguel',
}
const animal = {
    nome: 'Gatito', 
}
function getSomething() {
    console.log(this.nome);
}
getSomething.call(pessoa);