// Clona a estrutura da função onde é chamada e aplica o valor do objeto passado como parametro

const retornaNomes = function () {
    return this.nome;
}
let meow = retornaNomes.bind({nome: 'Gatito'});
meow();
console.log(meow());