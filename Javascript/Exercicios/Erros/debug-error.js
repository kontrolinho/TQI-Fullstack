function validaArray (arr, num) {
    try {
        if (!arr && !num)
        throw new ReferenceError('Envie os parametros');

        if (typeof arr !== 'object')
        throw new TypeError ('O array precisa ser do tipo array');
    
        if (typeof num !== 'number')
        throw new TypeError ('O array precisa ser do tipo number');
    
        if (arr.length !== num)
        throw new RangeError ('Tamanho invalido');

        return arr;
    } catch (e) {
        if (e instanceof ReferenceError) {
            console.log('Reference Error');
            console.log(e.stack);
        } else if (e instanceof TypeError) {
            console.log('Type Error');
            console.log(e.stack);
        } else if (e instanceof RangeError) {
            console.log('Range Error');
            console.log(e.stack);
        } else {
            console.log('Tipo de erro não esperado:' + e);
            console.log(e.stack);
        }
    }
}

console.log(validaArray([1, 3, 5], 3));