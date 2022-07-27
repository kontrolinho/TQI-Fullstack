// Error
// Todos os paramentros sao opcionais
new Error (message, fileName, lineNumber)

// !!! Testar cada metodo no navegador !!!
// Em alguns browsers fileName e lineNumber nao sao padrao,
// deve-se consultar a documentacao do browser

// Estou utilizando comentarios em todas as linhas já que throw por estar fora de um try, deixa o codigo inacessivel.

// Como declarar erros:

/*
const novoErro = new Error ('Mensagem Invalida')
throw novoErro;
*/

// constante com o nome do novo erro, instanciar o novo erro com os parametros, no caso a string: 'Mensagem invalida'.
// Logo após um throw para sinalizar o erro.



/////////////////////////////////////////////////////////////////////
// Como declarar nomes para os erros:

/* 

const nomeErro = new Error ('Mensagem do erro');
nomeErro.name = 'Nome do erro';
throw nomeErro;

*/

