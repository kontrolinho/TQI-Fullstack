function par(array) {
if (!array) return -1;
if (!array.length) return -1;

    for (let i = 0; i < array.length; i++) {
        if (array[i] === 0) {
        console.log("Voce é zero.");
        } else if (array[i] % 2) {
            console.log(`Substituindo ${array[i]} por 0.`);
        array[i] = 0;
        }
    }
    return array;
}
let array = null;
console.log(par(array));