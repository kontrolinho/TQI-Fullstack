// EXEMPLO 1 - 
function numeroPositivo (n1) {
    let resultado;

    if (n1 < 0) {
        resultado = false;
    } else {
        resultado = true;
    }
    return resultado;
}

console.log(numeroPositivo(5))  // true
console.log(numeroPositivo(-10)) // false

// EXEMPLO 2 - 

function numPositivo (n2) {
    let result;
    
    const ehNegativo = n2 < 0;

    if (ehNegativo) {
        result = false;
    }   else {
        result = true
    }
    return result;
}

console.log(numPositivo(2))     // true
console.log(numPositivo(-3))    // false

// EXEMPLO 3 -

function nPositivo (n3) {
    const eNegativo = n3 < 0;

    if (eNegativo) {
        return false;
    } return true;
}

console.log(nPositivo(12))     // true
console.log(nPositivo(-33))    // false