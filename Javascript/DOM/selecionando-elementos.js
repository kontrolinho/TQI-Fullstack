
// Selecionando elementos de uma pagina

document.getElementById('titulo')
// vc estara selecionando um unico elemento correspondente aquela ID
// <h1 id="titulo"><h1>

document.getElementsByClassName('textos')
// selecionando varios elementos correspondentes aquelas Classes.
// <p class="textos"><p>
// <h2 class="textos"><h2>

document.getElementsByTagName('li')
// vai retornar os elements dentro de uma array, e para selecionar especificamente um desses nós, é necessario utilizar um indice [i].
// <li>Projeto 1</li>
// <li>Projeto 2</li>
// <li>Projeto 3</li>


document.querySelectorAll('.primeira-classe .segunda-classe')
// <div class="primeira-classe segunda-classe"></div>

document.querySelectorAll('li .opcao')
// <li class="opcao">opcao 1</li>
// <li class="opcao">opcao 2</li>
// <li class="opcao">opcao 3</li>


// Adicionar ou deletar elementos

document.createElement(element) // Cria um novo elemento HTML
document.removeChild(element) // remove um elemento HTML
document.appendChild(element) // adiciona um elemento HTML
 // document.replaceChild(new, old) -- substitui um elemento HTML

 document.createElement("p") // cria um novo paragrafo (p).