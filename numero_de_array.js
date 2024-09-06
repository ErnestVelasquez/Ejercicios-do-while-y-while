let array = [1, 2, 3, 4, 2, 2, 5, 6];
let numeroBuscado = 2;
let contador = 0;
let i = 0;

while(i < array.length){
    if (array[i] === numeroBuscado){
        contador++;
    }
    i++;
}
console.log("El numero" + numeroBuscado + "aparece" + contador + "veces en el array.");