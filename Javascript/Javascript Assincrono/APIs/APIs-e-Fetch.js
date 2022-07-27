// ------------------------- API --------------------------- //
// --------- Application Programing Interface -------------- //

// Uma API é uma forma de intermediar os resultados do back-end
// com o que é apresentado no front-end.
// Voce consegue acessá-las por meio de URLs
// --------------------------------------------------------- //



// -------------------------- JSON ------------------------ //
// Javascript Object Notation

// É muito comum que APIs retornem seus dados no formado .json
// portanto precisamos tratar esses dados quando recebemos

// -------------------------------------------------------- //

// ------------------------ Fetch ------------------------  //

fetch(url, options)
    .then(response => response.json())
    .then(json => console.log(json))

    // retorna uma promise


    //////////////////////////////////////////////////////

    // Pode ser também realizada operacoes na db 
    // (POST, GET, PUT, DELETE, etc)

    fetch ('https://endereco-api.com', {
        method: 'POST',
        cache: 'no-cache',
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(json => console.log(json))

    // retorna uma promise