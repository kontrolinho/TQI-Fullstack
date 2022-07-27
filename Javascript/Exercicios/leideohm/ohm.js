function calculadoraLeiDeOhm() {
    const operacao = Number(prompt("Insira sua operacao \n 1 - Resistencia \n 2 - Corrente \n 3 - Tensão \n 4 - Potencia"));
    switch(operacao) {
        case 1:
            resistencia();
            break;
        case 2:
            corrente();
            break;
        case 3:
            tensao();
            break;
        case 4:
            potencia();
            break;

        function resistencia() {
            var tensao = Number(prompt('Digite sua tensao'))
            var corrente = Number(prompt('Digite sua corrente'))
            resistencia = tensao / corrente;
            alert(`${tensao} / ${corrente} = ${resistencia}`);
            novaOperacao();
        }

        function corrente() {
            var tensao = Number(prompt('Digite sua tensao'))
            var resistencia = Number(prompt('Digite sua resistencia'))
            corrente = tensao / resistencia;
            alert(`${tensao} / ${resistencia} = ${corrente}`);
            novaOperacao();
        }

        function tensao() {
            var corrente = Number(prompt('Digite sua corrente'))
            var resistencia = Number(prompt('Digite sua resistencia'))
            tensao = corrente * resistencia;
            alert(`${corrente} * ${resistencia} = ${tensao}`);
            novaOperacao();
        }

        function potencia() {
            var corrente = Number(prompt('Digite sua corrente'))
            var tensao = Number(prompt('Digite sua tensao'))
            tensao = corrente * tensao;
            alert(`${corrente} * ${tensao} = ${tensao}`);
            novaOperacao();
        }

        function novaOperacao() {
            let opcao = prompt('Deseja fazer outra operação?\n 1 - Sim\n 2 - Não')
            if (opcao == 1) {
                calculadoraLeiDeOhm();
            } else { (opcao == 2) 
                alert('Obrigado');
            }
        }
    }
    }
calculadoraLeiDeOhm();