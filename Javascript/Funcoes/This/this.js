// A palavra reservada this é uma referencia de contexto.
// no exemplo, this refere-se ao objeto gato
// Seu valor pode mudar de acordo com o lugar no codigo onde foi chamado

const gato = {
    nome: 'Gatito',
    raca: 'Siberiano',
    id: 5,
    nomeRaca: function() {
        return this.nome + ' ' + this.raca;
    },
    getId: function() {
        return this.id;
    }
};

console.log(gato.nomeRaca());
console.log(gato.getId());


/////////////////////////////////////////////

const meow = {
    firstName: 'Gatito',
    lastName: 'Whiskas',
    getFullName: function() {
        console.log(`${this.firstName} ${this.lastName}`)
    }
}

meow.getFullName();