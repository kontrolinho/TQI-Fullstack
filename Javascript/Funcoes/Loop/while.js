// while executa instrucoes até que a condicao seja falsa

function exemploWhile () {
    let n1 = 0
    while (n1 <= 10) {
        console.log(n1)
        n1++;
    }
}

exemploWhile();

// dowhile executa instrucoes até que a condição seja falsa
// PORÉM a primeira execucao SEMPRE ACONTECE.

function exemploDoWhile() {
    let n2 = 4;

    // apesar de 4 > 3, ele vai rodar a primeira vez, e depois realizar a condicional de que 3 < 4.

    do {
        console.log(n2);
        n2++;
    } while (n2 <= 3)
}

exemploDoWhile();