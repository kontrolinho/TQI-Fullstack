// Assincrono
// Que não ocorre ou não se efetiva ao mesmo tempo
// JS assincrono é quando realiza algo, enquanto outra coisa ainda é realizada (realizar varias coisas ao mesmo tempo)

// Promises
// Objeto de processamento assíncrono
// Inicialmente o valor da Promise é desconhecido. Ela pode ser resolvida ou rejeitada.
// Pode ter 3 estados
// Pending - Pendente
// Fulfilled - Aceita e completada
// Rejected - Rejeitada
// --------------- Estrutura -------------------//

const myPromise = new Promise ((resolve, reject) => {
    window.setTimeout(() =>{
        resolve(console.log('Resolvida'))
    }, 2000);
});

await myPromise
    .then((result) => result + 'passando pelo then')
    .then((result) => result + 'e acabou o then')
    .catch((err) => console.log(err.message));

    // Após 2 segundos, retornará o valor
        // 'Resolvido passando pelo then e agora acabou'

    // then é caso sua promise seja bem sucedida