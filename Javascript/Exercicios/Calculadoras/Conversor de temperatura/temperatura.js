function temperatura() {
    const operacao = Number(prompt('Selecione sua operação:\n1 Kelvin para Celsius\n2 Kelvin para Fahrenheit\n3 Celsius para Kelvin\n4 Celsius para Fahrenheit\n5 Fahrenheit para Celsius\n6 Fahrenheit para Kelvin\n'));

    switch (operacao) {
        case 1:
            kelvinCelsius();
            break;
        case 2:
            kelvinFahrenheit();
            break;
        case 3:
            celsiusKelvin();
             break;
        case 4:
            celsiusFahrenheit();
            break;
        case 5:
            fahrenheitCelsius();
            break;
        case 6:
            fahrenheitKelvin();
            break;
    

        function kelvinCelsius() {
            var kelvin = Number.parseFloat(prompt('Digite quantos Kelvins:'))
            kelvinCelsius = kelvin - 273.15;
            alert(kelvinCelsius);
            novaOperacao();
        }

        function kelvinFahrenheit() {
            var kelvin = Number.parseFloat(prompt('Digite quantos Kelvins:'))
            kelvinFahrenheit = (kelvin - 273.15) * (9 / 5) + 32;
            alert(kelvinFahrenheit);
            novaOperacao();
        }

        function celsiusKelvin() {
            var celsius = Number.parseFloat(prompt('Digite quantos graus Celsius:'))
            celsiusKelvin = celsius + 273.15;
            alert(celsiusKelvin);
            novaOperacao();
        }

        function celsiusFahrenheit() {
            var celsius = Number.parseFloat(prompt('Digite quantos graus Celsius:'))
            celsiusFahrenheit = (celsius * (9 / 5) + 32);
            alert(celsiusFahrenheit);
            novaOperacao();
        }
        
        function fahrenheitCelsius() {
            var fahrenheit = Number.parseFloat(prompt('Digite quantos graus Fahrenheit:'))
            fahrenheitCelsius = (fahrenheit - 32) * (5 / 9);
            alert(fahrenheitCelsius);
            novaOperacao();
        }

        function fahrenheitKelvin() {
            var fahrenheit = Number.parseFloat(prompt('Digite quantos graus Fahrenheit:'))
            fahrenheitKelvin = (fahrenheit - 32) * (5 / 9) + 273.15;
            alert(fahrenheitKelvin);
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
temperatura();
