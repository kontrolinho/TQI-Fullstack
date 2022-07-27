// Eventos

// eventos de mouse (mouseover, mouseout)
// eventos de clique (click, dbclick)
// eventos de atualizacao (change, load)

// Adicionando eventos
// Diretamente no JS, crie um evento que vai ser acionado no momento em que o usuario realizar determinada ação

// JS
const botao = document.getElementById('meuBotao');
botao.addEventListener('click', outraFuncao);

// HTML

/* <h1 onclick="mudaTexto(this)">Clique aqui<h1>
<script>
    function mudaTexto(id) {
        Id.innerHTML = "Mudei!";
    }
</script> */