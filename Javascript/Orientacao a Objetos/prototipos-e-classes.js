// Prototipos

// Todos os objetos JS herdam propriedades e metodos de um prototype.
// O objeto Object.prototype está no topo desta cadeia.
// É basicamente o esqueleto de todos os objetos em JS, todos os objetos iram herdar determinados prototipos em JS.

// Classes
// Syntatic sugar: uma sintaxe feita para facilitar a escrita
// JS não possui classes nativamente. Todas as classes sao objetos e a heranca se da por prototypes.

class Cat {
    constructor (meow) {
    this.meow = meow
    }

    whiskas() {
        return 'Meow'
    }
}