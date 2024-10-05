function convertiramayusculas(arr){
    return arr.map(str => str.toUpperCase());

}

let palabras = ["hola", "mundo", "como estas"];
let palabrasMayusculas = convertiramayusculas(palabras);
console.log(palabrasMayusculas);