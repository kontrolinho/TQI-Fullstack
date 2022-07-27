// call
// É possivel passar parametros para essa função separando-os por virgulas
// neste caso está somando os valores do objeto myObj e tambem os parametros de soma
// 1 + 7 + 3 + 7 = 18

const myObj = {
    n1: 1,
    n2: 7,
}

function soma(a, b) {
    console.log(this.n1 + this.n2 + a + b);
}
soma.call(myObj, 3, 7); // myobj = 1, 7 e 3, 7 = 18


///////////////////////////////////////////////////////////////
// É possivel  passar parametros para essa funcao dentro de uma array


const myNum = {
    n3: 8,
    n4: 12,
}

function sub(c, d) {
    console.log(this.n3 - this.n4 - c - d);
}
sub.apply(myNum, [17, 13]);