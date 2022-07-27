// VALORES PADRAO E ARGUMENTS

//VALORES PADRAO

function exponencial(array, num = 1){ // valor padrao de num será 1
    const result = [];

    for (let i = 0; i < array.length; i++){
        result.push(array[i] ** num);
        // primeiro indice da lista é 0, e, para cada item do indice até o fim dele (i menor que o tamanho da array), vai acrescentar 1 na contagem (i++).
    }

    return result;
}

exponencial([1, 2, 3, 4]);    // nao fara nada, pois nao tem exp.
exponencial([1, 2, 3, 4], 4); // numero dentro da array ** fora


console.log(exponencial([1, 2, 3, 4], 4));


// Objeto Arguments
// Um array com todos os parametros passados quando a funcao foi invocada

function findMax() {
    let max = -Infinity;

    for(let i = 0; i < arguments.length; i++) {
        if (arguments[i] > max) {
            max = arguments[i];
        }
    }
    return max;
}

function showArgs() {
    return arguments;
} // pode inputar valores, arrays, strings, pode ser iterado.


/// iteravel é a repeticao de uma ou mais acoes