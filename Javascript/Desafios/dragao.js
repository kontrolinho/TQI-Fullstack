let input = gets();
let qtdEntradas = parseInt(input);
let nivelEnergia;

for(let i = 0; i < qtdEntradas; i++){
    input = gets();
    nivelEnergia = parseInt(input);
    
    if (input > 8000) {
        print('Mais de 8000!')
    }else{
        print('Inseto!')
    }
}