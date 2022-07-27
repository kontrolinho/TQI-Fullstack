
// também pode utilizar try..catch para obter resultados

async function resolvePromise () {
    const myPromise = new Promise((resolve, reject) => {
        window.setTimeout(() => {
            resolve('Resolvida');
        }, 3000);
    });

    let result;

    try {
        result = await myPromise
        .then((result) => result + 'passando pelo then')
        .then((result) => result + 'passando pelo then')
    } catch (err) {
        result = err.message;
    }
    return result
}