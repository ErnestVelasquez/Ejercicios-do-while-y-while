function encontrarMayor(arr){
    return Math.max(...arr);
}

let numeros = [3, 5, 7, 2, 8];
let mayor = encontrarMayor(numeros);
console.log(mayor);