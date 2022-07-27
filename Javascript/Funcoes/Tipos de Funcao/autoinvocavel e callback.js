// Funcao autoinvocavel
// funcao anonima entre parentesis, seguida por outro par de parentesis, que representa sua chamada

(           // parentesis inicial
function() {
    let name = "Nome"
    return name;
}
)();        // par de parentesis invocando a function

(
    function(a, b) {
        return a + b;
    }
)(1, 3); // 4

const soma3 = (
    function(a, b) {
        return a + b;
    }
)(5, 3);
console.log(soma3) // 8


/////////////////////////////////////
///////// CALLBACK //////////////////
/////////////////////////////////////

// Uma funcao passada como parametro para outra funcao
// Utilizando callback vc tem maior controle de ordem de chamadas
// vc pode controlar quando essa funcao é chamada

const calc = function(operacao, n1, n2){
    return operacao(n1, n2);
}
const soma = function(n1, n2){
    return n1 + n2;
}
const sub = function(n1, n2){
    return n1 - n2;
}
const resSoma = calc(soma, 5, 7);
const resSub = calc(sub, 8, 5);

console.log(resSub);    // 3
console.log(resSoma);   // 12