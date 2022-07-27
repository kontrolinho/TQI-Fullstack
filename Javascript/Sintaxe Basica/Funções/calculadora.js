
/////////////////////////////////////////////////////////////////////
//////////////// ----------- Funçoes Aritmeticas --------- //////////
/////////////////////////////////////////////////////////////////////


function calculadora() {
    const operacao = Number(prompt('Escolha uma operação:\n 1 - Soma\n 2 - Subtração\n 3 - Multiplicação\n 4 - Divisão real\n 5 - Divisão inteira\n 6 - Potenciação')); // prompt abre um alertbox com uma caixa de texto

    if (!operacao || operacao >= 7) { // Se o usuario digitar um numero >= 7 ou letras na selecao de operacao
        alert('Operacao Invalida')
        calculadora();
    } else {

    let n1 = Number(prompt('Insira o primeiro número:'));
    let n2 = Number(prompt('Insira o segundo número:'));
    let resultado;

    if (!n1 || !n2) { // // Se o usuario digitar um numero >= 7 ou letras na selecao de numeros
        alert('Erro - Parametros inválidos')
        calculadora();
    }

    function soma() {
        resultado = n1 + n2;
        alert(`${n1} + ${n2} = ${resultado}`)
        novaOperacao();
    }
    function subtracao() {
        resultado = n1 - n2;
        alert(`${n1} - ${n2} = ${resultado}`)
        novaOperacao();
    }
    function multiplicacao() {
        resultado = n1 * n2;
        alert(`${n1} * ${n2} = ${resultado}`)
        novaOperacao();
    }
    function divisaoReal() {
        resultado = n1 / n2;
        alert(`${n1} / ${n2} = ${resultado}`)
        novaOperacao();
    }
    function divisaoInteira() {
        resultado = n1 % n2;
        alert(`O resto da divisão entre ${n1} e ${n2} é igual a ${resultado}`)
        novaOperacao();
    }
    function potenciacao() {
        resultado = n1 ** n2;
        alert(`${n1} elevado a ${n2} é igual a ${resultado}`)
        novaOperacao();
    }

    function novaOperacao() {
        let opcao = prompt('Deseja fazer outra operação?\n 1 - Sim\n 2 - Não')
        if (opcao == 1) {
            calculadora();
        } else { (opcao == 2) 
            alert('Obrigado');
        }
    }

    
    if (operacao == 1) {
        soma()
    } else if (operacao == 2) {
        subtracao()
    } else if (operacao == 3) {
        multiplicacao()
    } else if (operacao == 4) {
        divisaoReal()
    } else if (operacao == 5) {
        divisaoInteira()
    } else if (operacao == 6) {
        potenciacao()
    }


    // Utilizando Switch
    switch (operacao) {
        case 1:
        soma();
        break;

        case 2:
        soma();
        break;

        case 3:
        soma();
        break;

        case 4:
        soma();
        break;

        case 5:
        soma();
        break;

        case 6:
        soma();
        break;
    }
}
}
calculadora();
