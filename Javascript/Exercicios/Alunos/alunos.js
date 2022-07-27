const alunos = [
    {
        nome: 'Gatito',
        nota: 10,
        turma: '1A',
    },
    {
        nome: 'João',
        nota: 4,
        turma: '3C',
    },
    {
        nome: 'Felipe',
        nota: 7,
        turma: '1A',
    },
    {
        nome: 'Marcelo',
        nota: 6,
        turma: '2A',
    }
];

function alunosAprovados (arr, media) {
    let aprovados = [];

    for(let i = 0; i < arr.length; i++){
        const {nota, nome} = arr[i];

        if (nota >= media ) {
            aprovados.push(nome);
        }
    }
    return aprovados;
}

console.log(alunosAprovados(alunos, 6));