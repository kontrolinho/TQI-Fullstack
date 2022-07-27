//////////////////////////////////////////////////////////////////
//////////////////////// Destructuring ///////////////////////////
/////////////////////////////////////////////////////////////////

// Entre chaves {} podemos filtrar apenas os dados que nos interessam em um objeto

// Descrevendo o usuario
const user = {
    id: 5,
    displayName: 'jmc',
    fullName: {
        firstName: 'John',
        lastName: 'McCarter',
    } 
};


// atribuindo a funcao userId ao Id, e retornando seu valor.
function userId({id}) {
    return id;
}

// atribuindo getFullName ao fullName, e first ao firstName e last ao lastName
function getFullName({fullName: {firstName: first, lastName: last}}){
    return `${first} ${last}` // retornando a info do first e last
}

// printando na tela a id atribuida ao usuario, e o nome completo dele atribuido pelo getFullName acima.
console.log(userId(user)) // 5
console.log(getFullName(user)) // John McCarter