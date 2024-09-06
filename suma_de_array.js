let array = [1, 2, 3, 4, 5];
let suma = 0;
let i = 0;

do{
    suma += array[i];
    i++; 
}while(i < array.length);

console.log(suma);