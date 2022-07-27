// solucao 1

function verificaPalindromo(string) {
    if(!string) return "string inexistente";

    return string.split("").reverse().join("") === string;

    // string.split = separar cada letra da palavra por linha
    // reverse() = inverte todas as letras
    // join("") = junta todas as letras   
}

console.log(verificaPalindromo(""));  // vai retornar true ou false