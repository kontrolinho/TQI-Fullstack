function fruta(id) {
    switch(id) {
        case 1:
        return 'Banana';
        break;
        case 2:
        return 'Abacate';
        break;
        case 3:
        return 'Mamão';
        break;
        default:
        return 'Morango';
        break;
    }
}

console.log(fruta(4)) // default: morango
console.log(fruta(2)) // abacate
console.log(fruta(1)) // banana